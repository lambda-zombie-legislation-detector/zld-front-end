import React, { Component } from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';
import bgimage from './congress.jpg';



class Bills extends Component {



    render() {
        const bills =
        {
            "status": "OK",
            "copyright": "Copyright (c) 2017 Pro Publica Inc. All Rights Reserved.",
            "results": [{
                "bill_id": "hr21-115",
                "bill_slug": "hr21",
                "congress": "115",
                "bill": "H.R.21",
                "bill_type": "hr",
                "number": "H.R.21",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr21.json",
                "title": "To amend chapter 8 of title 5, United States Code, to provide for en bloc consideration in resolutions of disapproval for \"midnight rules\", and for other purposes.",
                "short_title": "Midnight Rules Relief Act of 2017",
                "sponsor_title": "Rep.",
                "sponsor": "Darrell Issa",
                "sponsor_id": "I000056",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/I000056.json",
                "sponsor_party": "R",
                "sponsor_state": "CA",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/21",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr21",
                "introduced_date": "2017-01-03",
                "active": true,
                "last_vote": "2017-01-04",
                "house_passage": "2017-01-04",
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 14,
                "cosponsors_by_party": {
                    "R": 13,
                    "D": 1
                },
                "withdrawn_cosponsors": 0,
                "primary_subject": "Government Operations and Politics",
                "committees": "Senate Homeland Security and Governmental Affairs Committee",
                "committee_codes": ["SSGA", "HSJU", "HSRU"],
                "subcommittee_codes": ["HSJU05"],
                "latest_major_action_date": "2017-01-05",
                "latest_major_action": "Received in the Senate and Read twice and referred to the Committee on Homeland Security and Governmental Affairs.",
                "house_passage_vote": "2017-01-04",
                "senate_passage_vote": null,
                "summary": "(This measure has not been amended since it was introduced. The summary has been expanded because action occurred on the measure.) Midnight Rules Relief Act of 2017 (Sec. 2) This bill amends the Congressional Review Act to allow Congress to consider a joint resolution to disapprove multiple regulations that federal agencies have submitted for congressional review within the last 60 legislative days of a session of Congress during the final year of a President's term. Congress may disapprove a group of such regulations together (i.e., \"en bloc\") instead of the current procedure of considering only one regulation at a time.",
                "summary_short": "(This measure has not been amended since it was introduced. The summary has been expanded because action occurred on the measure.) Midnight Rules Relief Act of 2017 (Sec. 2) This bill amends the Congressional Review Act to allow Congress to consider a joint resolution to disapprove multiple regulations that federal agencies have submitted for congressional review within the last 60 legislative days of a session of Congress during the final year of a President's term. Congress may disapprove a...",
                "versions": [],
                "actions": [{
                    "id": 16,
                    "chamber": "Senate",
                    "action_type": "IntroReferral",
                    "datetime": "2017-01-05",
                    "description": "Received in the Senate and Read twice and referred to the Committee on Homeland Security and Governmental Affairs."
                },
                {
                    "id": 15,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "Motion to reconsider laid on the table Agreed to without objection."
                },
                {
                    "id": 14,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "On passage Passed by recorded vote: 238 - 184 (Roll no. 8). (text: CR H74)"
                },
                {
                    "id": 13,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "On motion to recommit with instructions Failed by the Yeas and Nays: 183 - 236 (Roll no. 7)."
                },
                {
                    "id": 12,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "Considered as unfinished business. (consideration: CR H86-87)"
                },
                {
                    "id": 11,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "POSTPONED PROCEEDINGS - At the conclusion of debate on the Castor (FL) motion to recommit, the Chair put the question on adoption of the motion to recommit and by voice vote, announced that the noes had prevailed. Ms. Castor (FL) demanded the yeas and nays and the Chair postponed further proceedings on adoption of the motion to recommit until a time to be announced."
                },
                {
                    "id": 10,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "The previous question on the motion to recommit with instructions was ordered without objection."
                },
                {
                    "id": 9,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "DEBATE - The House proceeded with 10 minutes of debate on the Castor (FL) motion to recommit with instructions. The instructions contained in the motion seek to require the bill to be reported back to the House with an amendment to add at the end of the bill a section 3 pertaining to exception for certain rules that prohibit discrimination by insurance issuers on the basis of gender or preexisting condition or that make healthcare more affordable for working Americans."
                },
                {
                    "id": 8,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "Ms. Castor (FL) moved to recommit with instructions to the Committee on the Judiciary. (text: CR H84)"
                },
                {
                    "id": 7,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "The previous question was ordered pursuant to the rule."
                },
                {
                    "id": 6,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "DEBATE - The House proceeded with one hour of debate on H.R. 21."
                },
                {
                    "id": 5,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "The rule provides for one hour of debate and one motion to recommit."
                },
                {
                    "id": 4,
                    "chamber": "House",
                    "action_type": "Floor",
                    "datetime": "2017-01-04",
                    "description": "Considered under the provisions of rule H. Res. 5. (consideration: CR H74-86)"
                },
                {
                    "id": 3,
                    "chamber": "House",
                    "action_type": "Committee",
                    "datetime": "2017-01-03",
                    "description": "Referred to the Subcommittee on Regulatory Reform, Commercial And Antitrust Law."
                },
                {
                    "id": 2,
                    "chamber": "House",
                    "action_type": "IntroReferral",
                    "datetime": "2017-01-03",
                    "description": "Referred to House Rules"
                },
                {
                    "id": 1,
                    "chamber": "House",
                    "action_type": "IntroReferral",
                    "datetime": "2017-01-03",
                    "description": "Referred to House Judiciary"
                }
                ],
                "votes": [{
                    "chamber": "House",
                    "date": "2017-01-04",
                    "time": "16:48:00",
                    "roll_call": "8",
                    "question": "On Passage",
                    "result": "Passed",
                    "total_yes": 238,
                    "total_no": 184,
                    "total_not_voting": 11,
                    "api_url": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/8.json"
                },
                {
                    "chamber": "House",
                    "date": "2017-01-04",
                    "time": "16:38:00",
                    "roll_call": "7",
                    "question": "On Motion to Recommit with Instructions",
                    "result": "Failed",
                    "total_yes": 183,
                    "total_no": 236,
                    "total_not_voting": 14,
                    "api_url": "https://api.propublica.org/congress/v1/115/house/sessions/1/votes/7.json"
                }
                ]

            }]
        }

        console.log(bills.copyright)
        return (
            <span>
                <Jumbotron fluid className="jumbo">
                    <Container fluid className="container container-jumbo" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>

                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <h6>Title:</h6> {bills.results[0].short_title}
                    </Row>
                    <Row>
                        <h6>Bill:</h6>  {bills.results[0].bill}
                    </Row>
                    <Row>
                        <h6>Congress:</h6>  {bills.results[0].congress}
                    </Row>
                    <Row>
                        <h6>Sponsor:</h6>  {bills.results[0].sponsor}
                    </Row>
                    <Row>
                        <h6>Introduced:</h6>  {bills.results[0].introduced_date}
                    </Row>
                    <Row>
                        <h6>Last Major Action:</h6>  {bills.results[0].latest_major_action}
                    </Row>

                </Container>

            </span>
        )
    }


}


export default Bills;