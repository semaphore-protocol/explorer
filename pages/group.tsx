import React, { useState, useEffect } from "react"
import { Container, Row, Col, Table, Button } from "react-bootstrap"
import { SemaphoreSubgraph, GroupResponse } from "@semaphore-protocol/data"
import { useRouter } from "next/router"

const GroupDashboardPage = () => {
    const router = useRouter()
    const { chain, id } = router.query
    const [group, setGroup] = useState<GroupResponse | undefined>(undefined)
    const [groupNotFound, setGroupNotFound] = useState(false)

    // Use SemaphoreSubgraph to fetch group data based on chain and ID
    useEffect(() => {
        const semaphoreSubgraph = new SemaphoreSubgraph(chain as string)
        const fetchGroup = async () => {
            const semaphoreGroup: GroupResponse = await semaphoreSubgraph.getGroup(`${id}`, {
                verifiedProofs: true,
                members: true
            })
            if (!semaphoreGroup) {
                setGroupNotFound(true)
            }
            setGroup(semaphoreGroup)
        }
        if (chain != undefined && id != undefined) {
            fetchGroup()
        }
    }, [chain, id])

    if (groupNotFound) {
        return <div>No Group Found</div>
    }

    if (!group) {
        return <div className="root bg-dark">Loading...</div>
    }

    const unixTimeToString = (timestamp_ms: number) => {
        // Use the Date constructor to convert the timestamp to a Date object
        const date = new Date(timestamp_ms * 1000)

        // Use the Date object methods to construct the date string in the desired format
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        const seconds = String(date.getSeconds()).padStart(2, "0")

        const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

        return dateString
    }

    return (
        <div className="root bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <Button variant="link" className="mt-2" onClick={() => router.push("/")}>
                            Home
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Group {group.id}</h1>
                    </Col>
                </Row>
                <Row>
                    <p>
                        <strong>Admin: </strong>
                        {group.admin}
                    </p>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h5>Members</h5>
                        </Row>
                        <Row>
                            <Col>
                                {group ? (
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th className="text-white">#</th>
                                                <th className="text-white">Commitment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {group.members?.map((member, index) => (
                                                <tr key={member}>
                                                    <td className="text-white">{index + 1}</td>
                                                    <td className="text-white">
                                                        {member.slice(0, 6)} ... {member.slice(71, 77)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                ) : (
                                    ""
                                )}
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h5>Verified Proofs</h5>
                        </Row>
                        <Row>
                            <Col>
                                {group ? (
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className="text-white">
                                                <th>Signal</th>
                                                <th>Merkle Root</th>
                                                <th>External Nullifier</th>
                                                <th>Nullifier Hash</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {group.verifiedProofs?.map((proof) => (
                                                <tr key={proof.nullifierHash}>
                                                    <td className="text-white">
                                                        {proof.signal.slice(0, 6)} ... {proof.signal.slice(71, 77)}
                                                    </td>
                                                    <td className="text-white">
                                                        {proof.merkleTreeRoot.slice(0, 6)} ...{" "}
                                                        {proof.signal.slice(71, 77)}{" "}
                                                    </td>
                                                    <td className="text-white">{proof.externalNullifier}</td>
                                                    <td className="text-white">
                                                        {proof.nullifierHash.slice(0, 6)} ...{" "}
                                                        {proof.nullifierHash.slice(71, 77)}
                                                    </td>
                                                    <td className="text-white">
                                                        {unixTimeToString(Number(proof.timestamp))}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                ) : (
                                    ""
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GroupDashboardPage
