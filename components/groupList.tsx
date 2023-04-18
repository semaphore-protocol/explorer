import { Row, Col, Table, Button } from "react-bootstrap"
import { GroupResponse } from "@semaphore-protocol/data"
import { useRouter } from "next/router"

interface GroupListProps {
    groups: GroupResponse[]
    chain: string
}

export default function GroupList({ groups, chain }: GroupListProps) {
    const router = useRouter()
    const totalMembers = () => {
        let sum = 0
        for (let i = 0; i < groups.length; i++) {
            sum += groups[i].members?.length ?? 0
        }
        return sum
    }

    const totalProofs = () => {
        let sum = 0
        for (let i = 0; i < groups.length; i++) {
            sum += groups[i].verifiedProofs?.length ?? 0
        }

        return sum
    }

    return (
        <>
            <Row className="mt-2">
                <Col>
                    <h5>{groups.length} Total Groups</h5>
                </Col>

                <Col>
                    <h5>{totalProofs()} Total Proofs</h5>
                </Col>
                <Col>
                    <h5>{totalMembers()} Total Members</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    {groups.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-white">
                                    <th>#</th>
                                    <th>Group Id</th>
                                    <th># of Proofs</th>
                                    <th># of Members</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groups.map((group, index) => (
                                    <tr key={group.id}>
                                        <td className="text-white">{index + 1}</td>
                                        <td className="text-white">
                                            <Button
                                                className="pt-0 pb-0"
                                                variant="link"
                                                onClick={() => router.push(`/group?id=${group.id}&chain=${chain}`)}
                                                key={group.id}
                                            >
                                                {" "}
                                                {group.id}{" "}
                                            </Button>
                                        </td>
                                        <td className="text-white">{group.verifiedProofs?.length ?? 0}</td>
                                        <td className="text-white">{group.members?.length ?? 0}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        ""
                    )}
                </Col>
            </Row>
        </>
    )
}
