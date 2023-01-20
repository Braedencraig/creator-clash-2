import React from "react";
import Accordion from "./accordion";

export default function Faq() {
  return (
    <div className="faq-bg">
      <div className="faq">
        <h2>Tickets</h2>
        <Accordion isFaq title="When does Creator Clash 2 go on sale?">
          <p>
            Event tickets and pay-per-view tickets will be available for
            purchase on January 27, 2023 at 10:00am ET/7:00am PT.
          </p>
        </Accordion>
        <Accordion isFaq title="Where do I purchase event tickets to CC2?">
          <p>
            Event tickets to attend Creator Clash 2 in Tampa, Florida may be
            purchased{" "}
            <a
              href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </Accordion>
        <Accordion
          isFaq
          title="I’m having trouble purchasing event tickets on Ticketmaster - what do I do?"
        >
          <p>
            Please reference Ticketmaster’s{" "}
            <a
              href="https://help.ticketmaster.com/s/?language=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>{" "}
            for assistance with purchasing event tickets. If you require further
            assistance, please{" "}
            <a
              href="https://ticketmaster-us.zendesk.com/hc/en-us/requests/new?ticket_form_id=5957004019217"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact Ticketmaster fan support
            </a>{" "}
            directly.
          </p>
        </Accordion>
        <Accordion isFaq title="What does my event ticket purchase include?">
          <p>
            Event tickets include admission to the Creator Clash 2 live event on
            April 15, 2023 at Amalie Arena in Tampa, Florida.
          </p>
          <p>
            Can’t make it to Tampa? Purchase pay-per-view tickets for access to
            the livestream hosted by Moment,{" "}
            <a
              href="https://www.moment.co/creatorclash"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </Accordion>
        <Accordion isFaq title="Where do I purchase PPV tickets?">
          <p>
            Pay-per-view tickets may be purchased{" "}
            <a
              href="https://www.moment.co/creatorclash"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            Please note - pay-per-view tickets do not include admission to the
            in-person event at Amalie Arena.{" "}
            <a
              href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Event tickets
            </a>{" "}
            sold separately.
          </p>
        </Accordion>
        <Accordion isFaq title="What does my PPV ticket purchase include?">
          <p>
            PPV tickets include access to view the official Creator Clash 2
            livestream hosted by Moment.
          </p>
          <p>
            Looking for tickets to attend Creator Clash 2 in Tampa? Purchase
            event tickets for admission to the in-person event{" "}
            <a
              href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </Accordion>
        <Accordion
          isFaq
          title="I’m having trouble purchasing PPV tickets/accessing the livestream - what do I do?"
        >
          <p>
            Please reference {""}
            <a
              href="https://www.moment.co/faq?type=fan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moment’s FAQ
            </a>{" "}
            for assistance troubleshooting any issues with purchasing a PPV
            ticket or accessing the livestream.
          </p>
        </Accordion>
        <h2>Event Info</h2>
        <Accordion isFaq title="Where will Creator Clash 2 take place?">
          <p>
            Creator Clash 2 will take place at Amalie Arena in Tampa, Florida.
          </p>
        </Accordion>
        <Accordion isFaq title="When is Creator Clash 2?">
          <p>
            The Creator Clash 2 event & livestream will take place on Saturday,
            April 15, 2023.
          </p>
        </Accordion>
        <Accordion isFaq title="Will x-item be allowed in the arena?">
          <p>
            Please reference Amalie Arena’s{" "}
            <a
              href="https://www.amaliearena.com/arena-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              arena info guide
            </a>{" "}
            for further information regarding the venue’s policies & procedures.
          </p>
        </Accordion>
      </div>
    </div>
  );
}
