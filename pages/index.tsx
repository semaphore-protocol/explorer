import Head from "next/head"
import React, { useState, useEffect } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { SemaphoreSubgraph, GroupResponse } from "@semaphore-protocol/data"
import { useRouter } from "next/router"
import GroupList from "../components/groupList"

const SemaphoreExplorer = () => {
    const [id, setId] = useState("")
    const [chain, setChain] = useState("goerli")
    const [groups, setGroups] = useState<GroupResponse[]>([])
    const router = useRouter()

    useEffect(() => {
        var subgraph = new SemaphoreSubgraph(chain)
        const fetchGroups = async () => {
            const groupsRes = await subgraph.getGroups({
                verifiedProofs: true,
                members: true
            })
            setGroups(groupsRes)
        }
        fetchGroups()
    }, [chain])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push(`/group?chain=${chain}&group=${id}`)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value)
    }

    return (
        <div className="root bg-dark">
            <Head>
                <title>Semaphore Explorer</title>
                <meta name="description" content="On chain semaphore group explorer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container>
                <Row className="align-items-end">
                    <Col md={{ span: 4 }}>
                        <h1>Semaphore Explorer</h1>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-end mt-2">
                                <Form.Group as={Col}>
                                    <Form.Label>Enter an ID:</Form.Label>
                                    <Form.Control type="text" placeholder="ID" value={id} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Select a chain:</Form.Label>
                                    <Form.Control as="select" value={chain} onChange={(e) => setChain(e.target.value)}>
                                        <option value="goerli">Goerli</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="optimism-goerli">Optimism Goerli</option>
                                        <option value="arbitrum">Arbitrum One</option>
                                    </Form.Control>
                                </Form.Group>
                                <Col>
                                    <Row>
                                        <Button variant="primary" type="submit">
                                            Search
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                <GroupList groups={groups} chain={chain} />
            </Container>
        </div>
    )
}

export default SemaphoreExplorer
