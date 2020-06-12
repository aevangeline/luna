import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Header, Container, SubHeader, Descriptor, Emph, PageText } from "./PageStyles";
import { EducationData, JobExperienceData, AwardsData } from '../constants/ResumeData';

export default class Resume extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props)
        this.state = {};
    }

    render() {



        return (

            <Row justify="center">
                <Col xs={10}>
                    <Container>
                        <Header>Résumé</Header>

                        <div className="job-block">
                            <SubHeader>Work Experience</SubHeader>
                            {JobExperienceData.map((job, idx) =>
                                <div className="job" key={idx}>
                                    <Descriptor><Emph>{job.role}</Emph> - {job.company} - {job.timespan} </Descriptor>
                                    <PageText>{job.desc}</PageText>
                                </div>
                            )}
                        </div>

                        <div className="education-block">
                            <SubHeader>Education</SubHeader>
                            {EducationData.map((edu, idx) =>
                                <Descriptor key={idx}>
                                    <Emph>{edu.school} </Emph> - {edu.program} - <Emph> {edu.degree} </Emph> - {edu.timespan}
                                </Descriptor>
                            )}
                        </div>
                        <div className="awards-block">
                            <SubHeader>Awards</SubHeader>
                            {AwardsData.map((award, idx) =>
                            <Descriptor key={idx}><Emph>{award.name}</Emph> - {award.date} </Descriptor>)}
                        </div>
                    </Container>
                </Col>
            </Row>
        )
    }
}