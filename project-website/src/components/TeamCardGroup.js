import { Card, CardGroup, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";

function TeamCardGroup() {
    return (
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Andreas Leonard-Calcano
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Tech Lead<br/>
                        DevOps<br/>
                        System Architect
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Skyler Herman
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Sponsor Communication Lead<br/>
                        Scribe<br/>
                        Scrum Master/Project Manager
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Peter Cesmegi
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Frontend Dev Lead<br/>
                        Database Master
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Dominique Smith-Rodriguez
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Design Specialist (UI/UX)
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Ethan Hower
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Tech Minion<br/>
                        Documentation Specialist
                    </CardSubtitle>
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default TeamCardGroup;