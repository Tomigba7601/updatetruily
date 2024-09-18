import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="py-16 px-4 md:px-0">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-red font-bold text-3xl text-left md:text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-base text-left md:text-center">
          Please reach us at <span className="text-red">sales@truily.com</span>{" "}
          if you cannot find an answer to your question.
        </p>
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                What is truily.com?
              </AccordionTrigger>
              <AccordionContent className="font-medium">
                truily.com is a dating website that connects singles from all
                over the world. Our platform is designed to help you find your
                perfect match.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">
                How does truily.com work?
              </AccordionTrigger>
              <AccordionContent>
                To use truily.com, simply create an account and complete your
                profile. You can then browse through the profiles of other
                members and send them a message if you're interested in getting
                to know them better.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">
                Is truily.com free to use?
              </AccordionTrigger>
              <AccordionContent>
                Signing up for truily.com is free, but to access all of our
                features you will need to upgrade to a premium membership.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold">
                What security measures do you have in place?
              </AccordionTrigger>
              <AccordionContent>
                We employ advanced security measures including firewalls, DDoS
                protection, and regular security audits.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
