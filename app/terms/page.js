/* eslint-disable */
import React from "react";
import Container from "../_components/Container";

const page = () => {
  return (
    <div className="py-10 flex flex-col">
      <Container>
        <h2 className="font-bold text-2xl mb-8">Terms and Condition</h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Agreement to Our Legal Terms
        </h1>

        <p className="text-gray-700 mb-6">
          We are <strong>Vibings Inc.</strong> (Company, Truily, we, us,
          our), a company incorporated in{" "}
          <strong>New Jersey, United States</strong> at 1030 Stelton Road, Suite
          #203, Piscataway, NJ 08854, USA.
        </p>

        <p className="text-gray-700 mb-6">
          We operate the Truily mobile app, the Truily desktop app, the website{" "}
          <a
            href="https://www.truily.world"
            className="text-blue-500 underline"
          >
            https://www.truily.world
          </a>
          , as well as any other related products and services under the Truily
          brand that refer or link to these legal terms (the Legal Terms)
          (collectively, the Services).
        </p>

        <p className="text-gray-700 mb-6">
          You can contact us by email at{" "}
          <a
            href="mailto:contact@truily.com"
            className="text-blue-500 underline"
          >
            contact@truily.com
          </a>{" "}
          or by mail to 1030 Stelton Road, Suite #203, Piscataway, NJ 08854,
          USA.
        </p>

        <p className="text-gray-700 mb-6">
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (you), and Vibings
          Inc., concerning your access to and use of the Services. You agree
          that by accessing the Services, you have read, understood, and agreed
          to be bound by all of these Legal Terms.{" "}
          <strong>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </strong>
        </p>

        <p className="text-gray-700 mb-6">
          We reserve the right to modify, amend, or change the Terms at any
          time. Changes will be posted, and we may notify you via email. By
          continuing to use the Services, you accept the updated terms. If you
          disagree, you should stop using the Services immediately.
        </p>

        <p className="text-gray-700 mb-6">
          The Services are intended for users who are at least 18 years old.
          Persons under 18 are not permitted to register for the Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Table of Contents
        </h2>
        <ul className="list-decimal pl-6 mb-8 text-gray-700">
          <li>Our Services</li>
          <li>Intellectual Property Rights</li>
          <li>User Representations</li>
          <li>User Registration</li>
          <li>Prohibited Activities</li>
          <li>User Generated Contributions</li>
          <li>Contribution License</li>
          <li>Social Media</li>
          <li>Third-Party Websites and Content</li>
          <li>Advertisers</li>
          <li>Services Management</li>
          <li>Privacy Policy</li>
          <li>Copyright Infringements</li>
          <li>
            Purchases, Automatically Renewing Subscriptions, and Virtual Items
          </li>
          <li>Term and Termination</li>
          <li>Modifications and Interruptions</li>
          <li>Governing Law</li>
          <li>Dispute Resolution</li>
          <li>Corrections</li>
          <li>Disclaimer</li>
          <li>Limitations of Liability</li>
          <li>Indemnification and Release</li>
          <li>User Data</li>
          <li>Electronic Communications, Transactions, and Signatures</li>
          <li>California Users and Residents</li>
          <li>Miscellaneous</li>
          <li>Contact Us</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Our Services
        </h2>
        <p className="text-gray-700 mb-6">
          The information provided when using the Services is not intended for
          distribution in jurisdictions where such distribution is contrary to
          law. If you access the Services from other locations, you are
          responsible for compliance with local laws.
        </p>
        {/* Section 1 - OUR SERVICES */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. OUR SERVICES</h2>
          <p className="mb-4">
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>
          <p className="mb-4">
            The Services are not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use the Services. You may not use the Services in a way that would
            violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>

        {/* Section 2 - INTELLECTUAL PROPERTY RIGHTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. INTELLECTUAL PROPERTY RIGHTS
          </h2>

          {/* Our Intellectual Property */}
          <h3 className="text-xl font-semibold mb-2">
            Our Intellectual Property
          </h3>
          <p className="mb-4">
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            "Content"), as well as the trademarks, service marks, and logos
            contained therein (the Marks).
          </p>

          <p className="mb-4">
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United States and around the
            world.
          </p>

          <p className="mb-4">
            The Content and Marks are provided in or through the Services AS
            IS for your personal, non-commercial use or internal business
            purpose only.
          </p>

          {/* Your Use of Our Services */}
          <h3 className="text-xl font-semibold mb-2">
            Your Use of Our Services
          </h3>
          <p className="mb-4">
            Subject to your compliance with these Legal Terms, including the
            PROHIBITED ACTIVITIES section below, we grant you a non-exclusive,
            non-transferable, revocable license to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the Services; and</li>
            <li>
              Download or print a copy of any portion of the Content to which
              you have properly gained access, solely for your personal,
              non-commercial use or internal business purpose.
            </li>
          </ul>

          <p className="mb-4">
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>

          <p className="mb-4">
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to:{" "}
            <a href="mailto:contact@truily.world" className="text-blue-500">
              contact@truily.world
            </a>
            . If we ever grant you the permission to post, reproduce, or
            publicly display any part of our Services or Content, you must
            identify us as the owners or licensors of the Services, Content, or
            Marks and ensure that any copyright or proprietary notice appears or
            is visible on posting, reproducing, or displaying our Content.
          </p>

          <p className="mb-4">
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks. Any breach of these Intellectual
            Property Rights will constitute a material breach of our Legal Terms
            and your right to use our Services will terminate immediately.
          </p>
        </section>

        {/* Section 3 - USER REPRESENTATIONS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. USER REPRESENTATIONS
          </h2>
          <p className="mb-4">
            By using the Services, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              All registration information you submit will be true, accurate,
              current, and complete;
            </li>
            <li>You will maintain the accuracy of such information;</li>
            <li>
              You have the legal capacity to comply with these Legal Terms;
            </li>
            <li>
              You are not a minor in the jurisdiction in which you reside;
            </li>
            <li>
              You will not access the Services through automated or non-human
              means;
            </li>
            <li>Your use of the Services will not violate any law.</li>
          </ul>

          <p className="mb-4">
            If you provide untrue, inaccurate, or incomplete information, we
            have the right to suspend or terminate your account.
          </p>
        </section>

        {/* Section 4 - USER REGISTRATION */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. USER REGISTRATION</h2>
          <p className="mb-4">
            You may be required to register to use the Services. You agree to
            keep your password confidential and will be responsible for all use
            of your account and password. We reserve the right to remove,
            reclaim, or change a username you select if we determine, in our
            sole discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
          </p>
          <p className="mb-4 capitalize">
            YOU UNDERSTAND THAT TRUILY IS NOT OBLIGATED TO CONDUCT CRIMINAL
            BACKGROUND CHECKS ON ITS USERS. TRUILY IS ALSO NOT OBLIGATED TO
            INQUIRE INTO THE BACKGROUNDS OF ITS USERS OR TO ATTEMPT TO VERIFY
            THE STATEMENTS OF ITS USERS. TRUILY MAKES NO REPRESENTATIONS OR
            WARRANTIES AS TO THE CONDUCT OF ANY USERS OR THEIR COMPATIBILITY
            WITH ANY CURRENT OR FUTURE USERS. TRUILY RESERVES THE RIGHT TO
            CONDUCT ANY CRIMINAL BACKGROUND CHECK OR OTHER SCREENINGS (SUCH AS
            SEX OFFENDER REGISTRATION SEARCHES) AT ANY TIME AND TO USE AVAILABLE
            PUBLIC RECORDS FOR ANY PURPOSE.
          </p>
        </section>
        <section id="prohibited-activities" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. PROHIBITED ACTIVITIES</h2>
          <p className="text-lg leading-7 mb-4">
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
          </p>
          <p className="text-lg leading-7 mb-4">
            As a user of the Services, you agree not to:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              Systematically retrieve data or other content from the Services to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Services.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm us and/or the Services.
            </li>
            <li>
              Use any information obtained from the Services to harass, abuse,
              or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the Services.
            </li>
            <li>
              Upload or transmit viruses, Trojan horses, or other harmful
              materials.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit any material that acts as a passive or active
              information collection or transmission mechanism.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services
              or the networks connected to the Services.
            </li>
            <li>
              Attempt to bypass any measures designed to prevent or restrict
              access to the Services.
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising the Services.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Services.
            </li>
            <li>
              Make any unauthorized use of the Services for revenue-generating
              or commercial enterprises.
            </li>
            <li>
              Use the Services to advertise or offer to sell goods and services.
            </li>
          </ul>
        </section>

        {/* Section 6: User Generated Contributions */}
        <section id="user-contributions" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            6. USER GENERATED CONTRIBUTIONS
          </h2>
          <p className="text-lg leading-7 mb-4">
            The Services may invite you to contribute to blogs, message boards,
            online forums, and other functionalities. Contributions you create
            or make available may be treated as non-confidential and
            non-proprietary. By making Contributions, you represent and warrant
            that:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              You are the creator and owner or have the necessary licenses,
              rights, consents, and permissions to use your Contributions.
            </li>
            <li>
              Your Contributions do not infringe on the proprietary rights of
              any third party, including copyrights, patents, trademarks, or
              trade secrets.
            </li>
            <li>
              Your Contributions do not violate any applicable law or
              regulation.
            </li>
            <li>
              Your Contributions are not false, inaccurate, or misleading.
            </li>
            <li>
              Your Contributions do not ridicule, mock, disparage, or abuse
              anyone.
            </li>
            <li>
              Your Contributions do not contain offensive comments related to
              race, gender, national origin, or physical handicap.
            </li>
            <li>
              Your Contributions are not used to harass or threaten anyone.
            </li>
          </ul>
          <p className="text-lg leading-7 mt-4">
            Any violation of these terms may result in the termination or
            suspension of your rights to use the Services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">7. Contribution License</h2>
          <p>
            By posting your Contributions to any part of the Services or making
            Contributions accessible to the Services by linking your account
            from the Services to any of your social networking accounts, you
            automatically grant, and you represent and warrant that you have the
            right to grant, to us an unrestricted, unlimited, irrevocable,
            perpetual, non-exclusive, transferable, royalty-free, fully-paid,
            worldwide right, and license to host, use, copy, reproduce,
            disclose, sell, resell, publish, broadcast, retitle, archive, store,
            cache, publicly perform, publicly display, reformat, translate,
            transmit, excerpt (in whole or in part), and distribute such
            Contributions (including, without limitation, your image and voice)
            for any purpose, commercial, advertising, or otherwise, and to
            prepare derivative works of, or incorporate into other works, such
            Contributions, and grant and authorize sublicenses of the foregoing.
            The use and distribution may occur in any media formats and through
            any media channels. This license will apply to any form, media, or
            technology now known or hereafter developed, and includes our use of
            your name, company name, and franchise name, as applicable, and any
            of the trademarks, service marks, trade names, logos, and personal
            and commercial images you provide. You waive all moral rights in
            your Contributions, and you warrant that moral rights have not
            otherwise been asserted in your Contributions. We do not assert any
            ownership over your Contributions. You retain full ownership of all
            of your Contributions and any intellectual property rights or other
            proprietary rights associated with your Contributions. We are not
            liable for any statements or representations in your Contributions
            provided by you in any area on the Services. You are solely
            responsible for your Contributions to the Services and you expressly
            agree to exonerate us from any and all responsibility and to refrain
            from any legal action against us regarding your Contributions. We
            have the right, in our sole and absolute discretion, (1) to edit,
            redact, or otherwise change any Contributions; (2)
            to re-categorize any Contributions to place them in more appropriate
            locations on the Services; and (3) to pre-screen or delete any
            Contributions, including content exchanged between users in direct
            messages. at any time and for any reason, without notice. We have no
            obligation to monitor your Contributions. We don’t assume any
            obligation to pre-screen any Contributions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-bold">8. Social Media</h2>
          <p>
            As part of the functionality of the Services, you may link your
            account with online accounts you have with third-party service
            providers (each such account, a "Third-Party Account") by either:
            (1) providing your Third-Party Account login information through the
            Services; or (2) allowing us to access your Third-Party Account, as
            is permitted under the applicable terms and conditions that govern
            your use of each Third-Party Account. You represent and warrant that
            you are entitled to disclose your Third-Party Account login
            information to us and/or grant us access to
            your Third-Party Account, without breach by you of any of the terms
            and conditions that govern your use of the
            applicable Third-Party Account, and without obligating us to pay any
            fees or making us subject to any usage limitations imposed by the
            third-party service provider of the Third-Party Account. By granting
            us access to any Third-Party Accounts, you understand that (1) we
            may access, make available, and store (if applicable) any content
            that you have provided to and stored in your Third-Party Account
            (the "Social Network Content") so that it is available on and
            through the Services via your account, including without limitation
            any friend lists and (2) we may submit to and receive from
            your Third-Party Account additional information to the extent you
            are notified when you link your account with
            the Third-Party Account. Depending on the Third-Party Accounts you
            choose and subject to the privacy settings that you have set in
            such Third-Party Accounts, personally identifiable information that
            you post to your Third-Party Accounts may be available on and
            through your account on the Services. Please note that if
            a Third-Party Account or associated service becomes unavailable or
            our access to such Third-Party Account is terminated by the
            third-party service provider, then Social Network Content may no
            longer be available on and through the Services. You will have the
            ability to disable the connection between your account on the
            Services and your Third-Party Accounts at any time. PLEASE NOTE THAT
            YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED
            WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
            AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no
            effort to review any Social Network Content for any purpose,
            including but not limited to, for accuracy, legality, or
            non-infringement, and we are not responsible for any Social Network
            Content. You acknowledge and agree that we may access your email
            address book associated with a Third-Party Account and your contacts
            list stored on your mobile device or tablet computer solely for
            purposes of identifying and informing you of those contacts who have
            also registered to use the Services. You can deactivate the
            connection between the Services and your Third-Party Account by
            contacting us using the contact information below or through your
            account settings (if applicable). We will attempt to delete any
            information stored on our servers that was obtained through
            such Third-Party Account, except the username and profile picture
            that become associated with your account.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 font-bold text-2xl">
            9. THIRD-PARTY WEBSITES AND CONTENT
          </h2>
          <p>
            The Services may contain (or you may be sent via the ) links to
            other websites ("Third-Party Websites") as well as articles,
            photographs, text, graphics, pictures, designs, music, sound, video,
            information, applications, software, and other content or items
            belonging to or originating from third parties ("Third-Party
            Content"). Such Third-Party Websites and Third-Party Content are not
            investigated, monitored, or checked for accuracy, appropriateness,
            or completeness by us, and we are not responsible for any
            Third-Party Websites accessed through the Services or
            any Third-Party Content posted on, available through, or installed
            from the Services, including the content, accuracy, offensiveness,
            opinions, reliability, privacy practices, or other policies of or
            contained in the Third-Party Websites or the Third-Party Content.
            Inclusion of, linking to, or permitting the use or installation of
            any Third-Party Websites or any Third-Party Content does not imply
            approval or endorsement thereof by us. If you decide to leave the
            Services and access the Third-Party Websites or to use or install
            any Third-Party Content, you do so at your own risk, and you should
            be aware these Legal Terms no longer govern. You should review the
            applicable terms and policies, including privacy and data gathering
            practices, of any website to which you navigate from the Services or
            relating to any applications you use or install from the Services.
            Any purchases you make through Third-Party Websites will be through
            other websites and from other companies, and we take no
            responsibility whatsoever in relation to such purchases which are
            exclusively between you and the applicable third party. You agree
            and acknowledge that we do not endorse the products or services
            offered on Third-Party Websites and you shall hold us blameless from
            any harm caused by your purchase of such products or services.
            Additionally, you shall hold us blameless from any losses sustained
            by you or harm caused to you relating to or resulting in any way
            from any Third-Party Content or any contact
            with Third-Party Websites.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">10. ADVERTISERS</h2>
          <p>
            We allow advertisers to display their advertisements and other
            information in certain areas of the Services, such as sidebar
            advertisements or banner advertisements. We simply provide the space
            to place such advertisements, and we have no other relationship with
            advertisers.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">11. SERVICES MANAGEMENT</h2>
          <p>
            We reserve the right, but not the obligation, to: (1) monitor the
            Services for violations of these Legal Terms; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Legal Terms, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Services or otherwise disable all files and content
            that are excessive in size or are in any way burdensome to our
            systems; and (5) otherwise manage the Services in a manner designed
            to protect our rights and property and to facilitate the proper
            functioning of the Services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">12. PRIVACY POLICY</h2>
          <p>
            We care about data privacy and security. Please review our Privacy
            Policy:
            <a href="www.truily.world/privacy-policy">
               www.truily.world/privacy-policy
            </a>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms. Please be
            advised the Services are hosted in the United States. If you access
            the Services from any other region of the world with laws or other
            requirements governing personal data collection, use, or disclosure
            that differ from applicable laws in the United States, then through
            your continued use of the Services, you are transferring your data
            to the United States, and you expressly consent to have your data
            transferred to and processed in the United States.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">
            13. COPYRIGHT INFRINGEMENTS
          </h2>
          <p>
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, please immediately
            notify us using the contact information provided below
            (a "Notification"). A copy of your Notification will be sent to the
            person who posted or stored the material addressed in the
            Notification. Please be advised that pursuant to applicable law you
            may be held liable for damages if you make material
            misrepresentations in a Notification. Thus, if you are not sure that
            material located on or linked to by the Services infringes your
            copyright, you should consider first contacting an attorney. So that
            we can prevent the unconsented use of your Contributions by other
            users or third parties outside of Truily, you authorize us to act on
            your behalf with respect to such infringing and/or unauthorized
            uses. This expressly includes the authority, but not the obligation,
            for us to send takedown notices (including, without limitation,
            pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices)) on
            your behalf if your Contributions are taken and used by third
            parties outside of Truily. Contributions are subject to the terms
            and conditions of Sections 512(c) and/or 512(d) of the Digital
            Millennium Copyright Act 1998.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">
            14. PURCHASES, AUTOMATICALLY RENEWING SUBSCRIPTIONS, AND VIRTUAL
            ITEMS
          </h2>
          <p>
            We care about data privacy and security. Please review our Privacy
            Policy:
            <a href="www.truily.world/privacy-policy">
               www.truily.world/privacy-policy
            </a>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms. Please be
            advised the Services are hosted in the United States. If you access
            the Services from any other region of the world with laws or other
            requirements governing personal data collection, use, or disclosure
            that differ from applicable laws in the United States, then through
            your continued use of the Services, you are transferring your data
            to the United States, and you expressly consent to have your data
            transferred to and processed in the United States.
          </p>
        </section>
        <section className="mb-8">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">In-App Purchases</h2>
            <p className="mb-2">
              Truily may offer products and services for purchase on the Truily
              Mobile App or the Truily Desktop App or while using the Services
              (“In-App Purchase”). If you choose to make an In-App Purchase, you
              acknowledge and agree that additional terms, disclosed to you at
              the point of purchase, may apply, and that such additional terms
              are incorporated herein by reference.
            </p>
            <p className="mb-2">
              You may make an In-App Purchase through the following payment
              methods (“Payment Method”): (a) making a purchase through a
              third-party platform such as the Apple App Store and Google Play
              Store (“Third Party Store”), or (b) paying with your credit card,
              debit card, or PayPal account, which will be processed by a
              third-party processor. Once you have made an In-App Purchase, you
              authorize us to charge your chosen Payment Method. If payment is
              not received by us from your chosen Payment Method, you agree to
              promptly pay all amounts due upon demand by us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Subscriptions and Auto-Renewal
            </h2>
            <p className="mb-2">
              Truily may offer some services as automatically-renewing
              subscriptions, e.g., a one-week subscription, one-month
              subscription, or three-month subscription (“Premium Services”). IF
              YOU PURCHASE AN AUTOMATICALLY RENEWING SUBSCRIPTION, YOUR
              SUBSCRIPTION WILL RENEW AT THE END OF THE PERIOD, UNLESS YOU
              CANCEL, AT TRUILY’S THEN-CURRENT PRICE FOR SUCH SUBSCRIPTIONS.
            </p>
            <p className="mb-2">
              To avoid charges for a new subscription period, you must cancel,
              as described below, before the end of the then-current
              subscription period. Deleting your account or deleting the
              application from your device does not cancel your subscription.
              You will be given notice of changes in the pricing of the Premium
              Services to which you have subscribed and an opportunity to
              cancel. If Truily changes these prices and you do not cancel your
              subscription, you agree that you will be charged at Truily’s
              then-current pricing for subscription.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Cancelling Subscriptions
            </h2>
            <p className="mb-2">
              If you purchased a subscription directly from Truily, you may
              cancel or change your Payment Method via the payment settings
              option under your profile. If you purchased a subscription through
              a Third Party Store, such as the Apple App Store or the Google
              Play Store, you will need to access your account with that Third
              Party Store and follow instructions to change or cancel your
              subscription. If you cancel your subscription, you may use your
              subscription until the end of the period you last paid for, but
              (i) you will not (except as set forth in the subsection entitled
              “Refunds” below) be eligible for a prorated refund, (ii) your
              subscription will not be renewed when that period expires and
              (iii) you will then no longer be able to use the Premium Services
              or In-App Purchases enabled by your subscription.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Refunds</h2>
            <p className="mb-2">
              Generally, all charges for purchases are nonrefundable, and there
              are no refunds or credits for partially used periods.
            </p>
            <p className="mb-2">
              For subscribers residing in Arizona, California, Colorado,
              Connecticut, Illinois, Iowa, Minnesota, New York, North Carolina,
              Ohio, Rhode Island, and Wisconsin, the terms below apply: YOU, THE
              BUYER, MAY CANCEL YOUR SUBSCRIPTION, WITHOUT PENALTY OR
              OBLIGATION, AT ANY TIME PRIOR TO MIDNIGHT OF THE THIRD BUSINESS
              DAY FOLLOWING THE DATE YOU SUBSCRIBED (EXCLUDING SUNDAYS AND
              HOLIDAYS).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Free Trials</h2>
            <p className="mb-2">
              If you sign up for a free trial and do not cancel, your trial may
              convert into a paid subscription and your Payment Method will be
              charged at the then-current price for such subscription. Once your
              free trial converts to a paid subscription, your paid subscription
              will continue to automatically renew at the end of each period,
              and your Payment Method will be charged, until you cancel.
            </p>
            <p className="mb-2">
              To avoid charges for a new subscription period, you must cancel
              before the end of the then-current subscription period or free
              trial period as described above. Deleting your account or deleting
              the application from your device does not cancel your free trial.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Sales Tax</h2>
            <p className="mb-2">
              The payments required under this Purchases Section do not include
              any Sales Tax that may be due in connection with the Premium
              Services provided under these Terms. If Truily determines it has a
              legal obligation to collect a Sales Tax from you in connection
              with these Terms, Truily will collect such Sales Tax in addition
              to the payments required under this Purchase Section.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Virtual Items</h2>
            <p className="mb-2">
              At times, you may be able to purchase a limited, personal,
              non-transferable, non-sublicensable, revocable license to access
              special limited-use features from Truily, referred to here as
              “Virtual Items.”
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Third Party Store Additional Terms
            </h2>
            <p className="mb-2">
              The following additional terms and conditions apply to you if you
              download the Truily App from a Third Party Store. You acknowledge
              and agree that these Legal Terms are concluded solely between you
              and Truily and not with the providers of the Third Party Store.
            </p>
          </section>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">15. TERM AND TERMINATION</h2>
          <p>
            These Legal Terms shall remain in full force and effect while you
            use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
            LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
            (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
            REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
            ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
            TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
            USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
            CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING,
            IN OUR SOLE DISCRETION. If we terminate or suspend your account for
            any reason, you are prohibited from registering and creating a new
            account under your name, a fake or borrowed name, or the name of any
            third party, even if you may be acting on behalf of the third party.
            In addition to terminating or suspending your account, we reserve
            the right to take appropriate legal action, including without
            limitation pursuing civil, criminal, and injunctive redress. Your
            information will be maintained and deleted in accordance with our
            Privacy Policy. You can terminate or delete your account at any
            time, for any reason, by logging into the Services, going to the
            “Settings” tab and following the instructions to terminate or delete
            your account. Please note that if you terminate or delete your
            account, your subscription will continue until the end of the
            subscription period for which applicable fees have been paid, and
            you will not be entitled to a refund except as may be provided in
            the section entitled “Purchases and Automatically Renewing
            Subscriptions.” In addition to terminating or deleting your account,
            you must also cancel/manage any recurring subscriptions purchased
            via a third-party store (e.g., iTunes, Google Play) to avoid
            additional billing.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">
            16. MODIFICATIONS AND INTERRUPTIONS
          </h2>
          <p>
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We will not be liable to you or any
            third party for any modification, price change, suspension, or
            discontinuance of the Services. We cannot guarantee the Services
            will be available at all times. We may experience hardware,
            software, or other problems or need to perform maintenance related
            to the Services, resulting in interruptions, delays, or errors. We
            reserve the right to change, revise, update, suspend, discontinue,
            or otherwise modify the Services at any time or for any reason
            without notice to you. You agree that we have no liability
            whatsoever for any loss, damage, or inconvenience caused by your
            inability to access or use the Services during any downtime or
            discontinuance of the Services. Nothing in these Legal Terms will be
            construed to obligate us to maintain and support the Services or to
            supply any corrections, updates, or releases in connection
            therewith.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">17. GOVERNING LAW</h2>
          <p>
            These Legal Terms and your use of the Services are governed by and
            construed in accordance with the laws of the State of New
            Jersey applicable to agreements made and to be entirely performed
            within the State of New Jersey, without regard to its conflict of
            law principles.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">18. DISPUTE RESOLUTION</h2>
          <p>
            Binding Arbitration If the Parties are unable to resolve a Dispute
            through informal negotiations, the Dispute (except those Disputes
            expressly excluded below) will be finally and exclusively resolved
            by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
            YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The
            arbitration shall be commenced and conducted under the Commercial
            Arbitration Rules of the American Arbitration Association ("AAA")
            and, where appropriate, the AAA’s Supplementary Procedures for
            Consumer Related Disputes ("AAA Consumer Rules"), both of which are
            available at the American Arbitration Association (AAA) website.
            Your arbitration fees and your share of arbitrator compensation
            shall be governed by the AAA Consumer Rules and, where appropriate,
            limited by the AAA Consumer Rules. If such costs are determined by
            the arbitrator to be excessive, we will pay all arbitration fees and
            expenses. The arbitration may be conducted in person, through the
            submission of documents, by phone, or online. The arbitrator will
            make a decision in writing, but need not provide a statement of
            reasons unless requested by either Party. The arbitrator must follow
            applicable law, and any award may be challenged if the arbitrator
            fails to do so. Except where otherwise required by the applicable
            AAA rules or applicable law, the arbitration will take place
            in Middlesex, New Jersey. Except as otherwise provided herein, the
            Parties may litigate in court to compel arbitration, stay
            proceedings pending arbitration, or to confirm, modify, vacate, or
            enter judgment on the award entered by the arbitrator. If for any
            reason, a Dispute proceeds in court rather than arbitration, the
            Dispute shall be commenced or prosecuted in the  state and federal
            courts located in Middlesex, New Jersey, and the Parties hereby
            consent to, and waive all defenses of lack of personal jurisdiction,
            and forum non conveniens with respect to venue and jurisdiction in
            such state and federal courts. Application of the United Nations
            Convention on Contracts for the International Sale of Goods and the
            Uniform Computer Information Transaction Act (UCITA) are excluded
            from these Legal Terms. If this provision is found to be illegal or
            unenforceable, then neither Party will elect to arbitrate any
            Dispute falling within that portion of this provision found to be
            illegal or unenforceable and such Dispute shall be decided by a
            court of competent jurisdiction within the courts listed for
            jurisdiction above, and the Parties agree to submit to the personal
            jurisdiction of that court.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">19. DISPUTE RESOLUTION</h2>
          <p>
            Binding Arbitration If the Parties are unable to resolve a Dispute
            through informal negotiations, the Dispute (except those Disputes
            expressly excluded below) will be finally and exclusively resolved
            by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
            YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The
            arbitration shall be commenced and conducted under the Commercial
            Arbitration Rules of the American Arbitration Association ("AAA")
            and, where appropriate, the AAA’s Supplementary Procedures for
            Consumer Related Disputes ("AAA Consumer Rules"), both of which are
            available at the American Arbitration Association (AAA) website.
            Your arbitration fees and your share of arbitrator compensation
            shall be governed by the AAA Consumer Rules and, where appropriate,
            limited by the AAA Consumer Rules. If such costs are determined by
            the arbitrator to be excessive, we will pay all arbitration fees and
            expenses. The arbitration may be conducted in person, through the
            submission of documents, by phone, or online. The arbitrator will
            make a decision in writing, but need not provide a statement of
            reasons unless requested by either Party. The arbitrator must follow
            applicable law, and any award may be challenged if the arbitrator
            fails to do so. Except where otherwise required by the applicable
            AAA rules or applicable law, the arbitration will take place
            in Middlesex, New Jersey. Except as otherwise provided herein, the
            Parties may litigate in court to compel arbitration, stay
            proceedings pending arbitration, or to confirm, modify, vacate, or
            enter judgment on the award entered by the arbitrator. If for any
            reason, a Dispute proceeds in court rather than arbitration, the
            Dispute shall be commenced or prosecuted in the  state and federal
            courts located in Middlesex, New Jersey, and the Parties hereby
            consent to, and waive all defenses of lack of personal jurisdiction,
            and forum non conveniens with respect to venue and jurisdiction in
            such state and federal courts. Application of the United Nations
            Convention on Contracts for the International Sale of Goods and the
            Uniform Computer Information Transaction Act (UCITA) are excluded
            from these Legal Terms. If this provision is found to be illegal or
            unenforceable, then neither Party will elect to arbitrate any
            Dispute falling within that portion of this provision found to be
            illegal or unenforceable and such Dispute shall be decided by a
            court of competent jurisdiction within the courts listed for
            jurisdiction above, and the Parties agree to submit to the personal
            jurisdiction of that court.
          </p>
          <p>
            Restrictions The Parties agree that any arbitration shall be limited
            to the Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to utilize class action
            procedures; and (c) there is no right or authority for any Dispute
            to be brought in a purported representative capacity on behalf of
            the general public or any other persons. Exceptions to Arbitration
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning binding arbitration: (a) any Disputes
            seeking to enforce or protect, or concerning the validity of, any of
            the intellectual property rights of a Party; (b) any Dispute related
            to, or arising from, allegations of theft, piracy, invasion of
            privacy, or unauthorized use; and (c) any claim for injunctive
            relief. If this provision is found to be illegal or unenforceable,
            then neither Party will elect to arbitrate any Dispute falling
            within that portion of this provision found to be illegal or
            unenforceable and such Dispute shall be decided by a court of
            competent jurisdiction within the courts listed for jurisdiction
            above, and the Parties agree to submit to the personal jurisdiction
            of that court.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">19. CORRECTIONS</h2>
          <p>
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">20. DISCLAIMER</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
            ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
            WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
            INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
            YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS
            TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
            INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
            INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES,
            (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR
            (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
            LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
            CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
            SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
            THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY
            WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
            OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
            YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
            APPROPRIATE.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">
            21. LIMITATIONS OF LIABILITY
          </h2>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS
            BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
            CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
            INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES
            ARISING FROM YOUR ACCESS OR USE OF THE SERVICES, HOWEVER CAUSED,
            WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE),
            PROPRIETARY RIGHTS INFRINGEMENT, PRODUCT LIABILITY OR OTHERWISE,
            EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF
            YOU BECOME DISSATISFIED IN ANY WAY WITH THE SERVICES, YOUR SOLE AND
            EXCLUSIVE REMEDY IS TO STOP YOUR USE OF THE SERVICES.NOTWITHSTANDING
            ANYTHING TO THE CONTRARY CONTAINED HEREIN, TO THE FULLEST EXTENT
            PERMITTED BY APPLICABLE LAW, IF ANY PORTION OF THIS LIMITATION ON
            LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON,
            THEN IN NO EVENT SHALL AGGREGATE LIABILITY TO YOU FOR ANY AND ALL
            CLAIMS (WHETHER BASED ON BREACH OF CONTRACT, TORT, INCLUDING
            NEGLIGENCE, PROPRIETARY RIGHTS INFRINGEMENT, PRODUCT LIABILITY OR
            OTHERWISE) ARISING OUT OF OR RELATING TO THE SERVICES OR THIS
            AGREEMENT EXCEED THE AMOUNT PAID, IF ANY, BY YOU TO DURING THE
            TWENTY-FOUR (24) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE THAT
            YOU FIRST FILE A CLAIM OR LAWSUIT. CERTAIN US STATE LAWS AND
            INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
            THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY
            TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
            APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS. THE LIMITATION OF
            LIABILITY HEREIN IS A FUNDAMENTAL ELEMENT OF THE BASIS OF THE
            BARGAIN AND REFLECTS A FAIR ALLOCATION OF RISK. THE SERVICES WOULD
            NOT BE PROVIDED WITHOUT SUCH LIMITATIONS AND YOU AGREE THAT THE
            LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS AND EXCLUSIVE
            REMEDIES SPECIFIED HEREIN WILL SURVIVE EVEN IF FOUND TO HAVE FAILED
            IN THEIR ESSENTIAL PURPOSE. THE FOREGOING DOES NOT APPLY TO
            LIABILITY ARISING FROM ANY FRAUD OR FRAUDULENT MISREPRESENTATIONS,
            OR ANY OTHER LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE LAW.
          </p>
        </section>
        <section id="indemnification-and-release" className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            22. INDEMNIFICATION AND RELEASE
          </h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your Contributions;</li>
            <li>Use of the Services;</li>
            <li>Breach of these Legal Terms;</li>
            <li>
              Any breach of your representations and warranties set forth in
              these Legal Terms;
            </li>
            <li>
              Your violation of the rights of a third party, including but not
              limited to intellectual property rights;
            </li>
            <li>
              Any overt harmful act toward any other user of the Services with
              whom you connected via the Services.
            </li>
          </ul>
          <p className="mb-4">
            Notwithstanding the foregoing, we reserve the right, at your
            expense, to assume the exclusive defense and control of any matter
            for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action, or
            proceeding which is subject to this indemnification upon becoming
            aware of it.
          </p>
          <p className="mb-4">
            You agree to, and hereby do, release Truily and its successors from
            any claims, demands, losses, damages, rights, and actions of any
            kind, including personal injuries, death and property damage, that
            either directly or indirectly arises from your interactions with or
            conduct of other users of the Services.
          </p>
          <p className="mb-4">
            If you are a California resident, you hereby waive California Civil
            Code Section 1542, which states, "A general release does not extend
            to claims that the creditor or releasing party does not know or
            suspect to exist in his or her favor at the time of executing the
            release and that, if known by him or her, would have materially
            affected his or her settlement with the debtor or released party."
          </p>
          <p className="mb-4">
            The foregoing release does not apply to any claims, demands, or any
            losses, damages, rights, and actions of any kind, including personal
            injuries, death or property damage for any unconscionable commercial
            practice by Truily or for such party’s fraud, deception, false
            promise, misrepresentation or concealment, suppression, or omission
            of any material fact in connection with the Services.
          </p>
        </section>

        {/* Section 23 */}
        <section id="user-data" className="mb-8">
          <h2 className="text-xl font-bold mb-4">23. USER DATA</h2>
          <p className="mb-4">
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the Services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services.
          </p>
          <p className="mb-4">
            You agree that we shall have no liability to you for any loss or
            corruption of any such data, and you hereby waive any right of
            action against us arising from any such loss or corruption of such
            data.
          </p>
        </section>

        {/* Section 24 */}
        <section id="electronic-communications" className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h2>
          <p className="mb-4">
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing.
          </p>
          <p className="mb-4">
            YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
            ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
            POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US
            OR VIA THE SERVICES.
          </p>
          <p className="mb-4">
            You hereby waive any rights or requirements under any statutes,
            regulations, rules, ordinances, or other laws in any jurisdiction
            which require an original signature or delivery or retention of
            non-electronic records, or to payments or the granting of credits by
            any means other than electronic means.
          </p>
        </section>

        {/* Section 25 */}
        <section id="california-users" className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            25. CALIFORNIA USERS AND RESIDENTS
          </h2>
          <p className="mb-4">
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </section>

        {/* Section 26 */}
        <section id="miscellaneous" className="mb-8">
          <h2 className="text-xl font-bold mb-4">26. MISCELLANEOUS</h2>
          <p className="mb-4">
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms
            shall not operate as a waiver of such right or provision.
          </p>
          <p className="mb-4">
            These Legal Terms operate to the fullest extent permissible by law.
            We may assign any or all of our rights and obligations to others at
            any time.
          </p>
          <p className="mb-4">
            We shall not be responsible or liable for any loss, damage, delay,
            or failure to act caused by any cause beyond our reasonable control.
            If any provision or part of a provision of these Legal Terms is
            determined to be unlawful, void, or unenforceable, that provision or
            part of the provision is deemed severable from these Legal Terms and
            does not affect the validity and enforceability of any remaining
            provisions.
          </p>
          <p className="mb-4">
            There is no joint venture, partnership, employment, or agency
            relationship created between you and us as a result of these Legal
            Terms or use of the Services.
          </p>
          <p className="mb-4">
            You agree that these Legal Terms will not be construed against us by
            virtue of having drafted them. You hereby waive any and all defenses
            you may have based on the electronic form of these Legal Terms and
            the lack of signing by the parties hereto to execute these Legal
            Terms.
          </p>
        </section>

        {/* Section 27 */}
        <section id="contact-us" className="mb-8">
          <h2 className="text-xl font-bold mb-4">27. CONTACT US</h2>
          <p className="mb-4">
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </p>
          <address className="italic">
            Vibings Inc.
            <br />
            1030 Stelton Road
            <br />
            Suite #203
            <br />
            Piscataway, NJ 08854
            <br />
            United States
            <br />
            contact@truily.world
          </address>
        </section>
      </Container>
    </div>
  );
};

export default page;
