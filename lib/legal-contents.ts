// Text reproduced verbatim from:
//   Privacy_Policy_Updated.pdf
//   Website_Terms_and_Conditions_Updated.pdf
// Do not edit wording here without an updated source document.

export type LegalListItem = string | { lead: string; text: string }

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'ul'; items: LegalListItem[] }
  | { type: 'ol'; items: LegalListItem[] }
  | { type: 'table'; headers?: string[]; rows: string[][] }

export type LegalSection = {
  heading: string
  blocks: LegalBlock[]
}

export const privacyTitle = `Privacy Policy`
export const privacyEffective = `Effective date: 21 October 2026 · Version: 1.0`

export const termsTitle = `Website Terms and Conditions`
export const termsEffective = `Effective date: 21 October 2026 · Version: 1.0`

export const privacySections: LegalSection[] = [
  {
    heading: `1. Who we are`,
    blocks: [
      { type: 'p', text: `Kemjet Himalog Technologies Private Limited ("Company", "we", "us", "our") is a company incorporated in India, CIN U52210AR2026PTC014371, with its registered office at New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh 790104. We operate the website https://kemjethimalog.com, its state-specific sub-sites and directories, and any related mobile application (together, the "Platform"). Through the Platform we help users obtain travel permits, book hotels and book taxis in the North-Eastern states of India. The Platform is operated by our digital vertical, Kemjet Technology. Our group also runs Kemjet Education & Youth Development, LD North East Infra and LD Construction and Kemjet Himalayan Agro.` },
      { type: 'p', text: `For personal data collected through the Platform, we are the "data fiduciary" under the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the "body corporate" under the Information Technology Act, 2000.` },
    ],
  },
  {
    heading: `2. Scope`,
    blocks: [
      { type: 'p', text: `This Policy explains what personal data we collect, why we collect it, who we share it with, and the choices you have. It applies to:` },
      {
        type: 'ul',
        items: [
          `visitors to the Platform;`,
          `customers who request a permit, hotel or taxi service;`,
          `travellers whose details a customer submits on their behalf;`,
          `hotel, taxi and other service partners who list or deliver services through us;`,
          `job applicants who apply for a role with us or any of our verticals.`,
        ],
      },
      { type: 'p', text: `By using the Platform or submitting your information, you confirm that you have read this Policy. Where the law requires your consent, we will ask for it separately and clearly.` },
    ],
  },
  {
    heading: `3. Personal data we collect`,
    blocks: [
      { type: 'p', text: `We collect only what we need for the service you ask for.` },
      {
        type: 'table',
        headers: [`Category`, `What it includes`, `When we collect it`],
        rows: [
          [`Identity and contact`, `Name, mobile number, email, postal address, date of birth, gender`, `Account creation, enquiry, booking`],
          [`Permit application data`, `Government ID such as Aadhaar, voter ID, passport or driving licence; photograph; nationality; place of residence; purpose, dates and places of visit; details of co-travellers and local sponsor where required`, `When you ask us to apply for a permit`],
          [`Booking data`, `Travel dates, pick-up and drop locations, hotel preferences, number of guests, special requests`, `Hotel and taxi bookings`],
          [`Payment data`, `Amount, payment method type, transaction ID, billing name, GST details`, `When you pay`],
          [`Communications`, `Messages, calls, emails, reviews and support tickets`, `When you contact us`],
          [`Device and usage data`, `IP address, browser, device type, pages viewed, approximate location, cookies`, `Automatically, when you use the Platform`],
          [`Partner data`, `Business name, owner details, licences, vehicle and driver documents, bank account for payouts, GSTIN and PAN`, `Partner onboarding`],
          [`Applicant data`, `CV, qualifications, work history, references, expected salary, ID proof`, `When you apply for a job`],
        ],
      },
      { type: 'p', text: `We do not store full card numbers, CVV or UPI PINs. Payments are processed by our payment gateway, which collects those details directly.` },
      { type: 'p', text: `For Aadhaar, we accept a masked copy or offline verification wherever the permit authority allows it. We do not store Aadhaar numbers beyond what the application requires.` },
      { type: 'p', text: `If you give us details of another person, such as a co-traveller, you confirm that you have their permission to do so.` },
      { type: 'p', text: `Government IDs, financial information and passwords are sensitive personal data under Indian law. We collect them only with your consent and only for the purpose stated at the time.` },
    ],
  },
  {
    heading: `4. How we use your personal data`,
    blocks: [
      { type: 'p', text: `We use personal data for these purposes only:` },
      {
        type: 'ol',
        items: [
          { lead: `Delivering the service.`, text: `Preparing and filing permit applications, confirming hotel and taxi bookings, and sharing trip details with the partner who serves you.` },
          { lead: `Account and support.`, text: `Creating your account, verifying your mobile number or email, answering queries and handling complaints.` },
          { lead: `Payments.`, text: `Collecting payments, issuing invoices, processing refunds and paying partners.` },
          { lead: `Service messages.`, text: `Sending booking confirmations, permit status updates and travel alerts by SMS, WhatsApp, email or call.` },
          { lead: `Marketing.`, text: `Sending offers and newsletters, only if you have opted in. You can opt out at any time.` },
          { lead: `Safety and fraud prevention.`, text: `Detecting misuse, fake documents and unauthorised access.` },
          { lead: `Improving the Platform.`, text: `Analysing usage in aggregated form to fix errors and improve features.` },
          { lead: `Recruitment.`, text: `Assessing job applications and contacting applicants.` },
          { lead: `Legal compliance.`, text: `Keeping tax and accounting records and responding to lawful requests from authorities.` },
        ],
      },
      { type: 'p', text: `We do not sell your personal data. We do not use it for automated decisions that have a legal effect on you.` },
    ],
  },
  {
    heading: `5. Consent and legal basis`,
    blocks: [
      { type: 'p', text: `We process personal data on the basis of your consent, given through a clear action such as ticking a box or submitting a form after reading the notice shown to you. Each request for consent states the data collected and the purpose.` },
      { type: 'p', text: `We may also process personal data without fresh consent where the law permits it. This includes data you voluntarily provide for a stated purpose, compliance with a law or court order, responding to a medical emergency or threat to life, and employment-related purposes.` },
      { type: 'p', text: `You may withdraw consent at any time by writing to [privacy email] or using the settings in your account. Withdrawal does not affect processing already done. If we need the data to deliver a service, we may be unable to continue that service after withdrawal.` },
    ],
  },
  {
    heading: `6. Who we share your data with`,
    blocks: [
      { type: 'p', text: `We share personal data only as needed for the purposes above.` },
      {
        type: 'table',
        headers: [`Recipient`, `Why`, `What we share`],
        rows: [
          [`Government permit authorities, such as state Home or Political Departments, Deputy Commissioner offices and their online portals`, `To file and obtain your permit`, `Permit application data and ID documents`],
          [`Hotels and accommodation partners`, `To confirm and honour your booking`, `Name, contact, stay dates, number of guests, ID where the hotel must record it by law`],
          [`Taxi operators and drivers`, `To provide the ride`, `Name, contact number, pick-up and drop details`],
          [`Payment gateways and banks`, `To process payments and refunds`, `Transaction and billing details`],
          [`IT and service providers, such as hosting, SMS, email, WhatsApp, analytics and customer support tools`, `To run the Platform on our behalf`, `Only the data each provider needs, under a contract`],
          [`Professional advisers and auditors`, `Legal, tax and audit work`, `Relevant records, under confidentiality`],
          [`Law enforcement, courts and regulators`, `Where the law requires it`, `Data specified in the lawful request`],
          [`A buyer or successor`, `In a merger, acquisition or restructuring`, `Data needed for the transaction, under the same protections`],
        ],
      },
      { type: 'p', text: `Service providers who process data for us are bound by written contracts. They must use the data only on our instructions and protect it with reasonable security safeguards.` },
      { type: 'p', text: `Hotels, taxi operators and government authorities handle your data under their own rules once they receive it. We are not responsible for their independent practices.` },
    ],
  },
  {
    heading: `7. Cookies and similar technologies`,
    blocks: [
      { type: 'p', text: `We use cookies to keep you signed in, remember your preferences, and understand how the Platform is used.` },
      {
        type: 'ul',
        items: [
          `Essential cookies are needed for login, booking and payment. They cannot be switched off.`,
          `Analytics cookies tell us which pages are used and where errors occur. We set them only with your consent.`,
          `Marketing cookies are used to show relevant offers. We set them only with your consent.`,
        ],
      },
      { type: 'p', text: `You can change your choice through the cookie banner or your browser settings. Blocking essential cookies may stop parts of the Platform from working.` },
    ],
  },
  {
    heading: `8. How long we keep your data`,
    blocks: [
      { type: 'p', text: `We keep personal data only as long as the purpose requires or the law demands, then delete or anonymise it.` },
      {
        type: 'table',
        headers: [`Data`, `Retention period`],
        rows: [
          [`Account data`, `While your account is active, and 3 years after your last activity`],
          [`Permit application documents and IDs`, `90 days after the permit is issued, rejected or the trip ends, unless a dispute is open`],
          [`Booking records`, `3 years after the booking date`],
          [`Invoices, payment and tax records`, `8 years, as required by tax and company law`],
          [`Support communications`, `2 years after the ticket is closed`],
          [`Job applications`, `12 months after the hiring decision, unless you ask us to delete sooner or agree to a longer period`],
          [`Access and security logs`, `At least 1 year`],
        ],
      },
      { type: 'p', text: `Where the law requires it, we will inform you before erasing data linked to an inactive account, so that you can log in and keep it.` },
    ],
  },
  {
    heading: `9. How we protect your data`,
    blocks: [
      { type: 'p', text: `We apply reasonable security practices suited to the data we hold. These include:` },
      {
        type: 'ul',
        items: [
          `encryption of data in transit using HTTPS/TLS and encryption of stored ID documents;`,
          `role-based access, so staff see only the data their job requires;`,
          `access logs, regular backups and periodic security reviews;`,
          `confidentiality obligations for employees and contractors, with privacy training on joining;`,
          `contracts that hold our service providers to the same standard.`,
        ],
      },
      { type: 'p', text: `No system is fully secure. If a personal data breach affects you, we will inform you and the Data Protection Board of India without delay, as the law requires. We will tell you what happened, the likely consequences, and the steps you can take.` },
      { type: 'p', text: `Please keep your password and OTPs confidential. We will never ask for them by phone, email or message.` },
    ],
  },
  {
    heading: `10. Where your data is stored`,
    blocks: [
      { type: 'p', text: `Your data is stored on servers provided by our hosting and cloud providers, which may be located in or outside India. Where data is transferred outside India, we do so only to countries not restricted by the Government of India and under contracts that require equivalent protection.` },
    ],
  },
  {
    heading: `11. Your rights`,
    blocks: [
      { type: 'p', text: `You have the following rights over your personal data. To use any of them, write to [privacy email] from your registered email or mobile number.` },
      {
        type: 'ul',
        items: [
          { lead: `Access.`, text: `Ask for a summary of the personal data we hold about you, how we use it, and who we have shared it with.` },
          { lead: `Correction and update.`, text: `Ask us to correct inaccurate data or complete missing data.` },
          { lead: `Erasure.`, text: `Ask us to delete data that is no longer needed, unless a law requires us to keep it.` },
          { lead: `Withdraw consent.`, text: `Withdraw consent as easily as you gave it.` },
          { lead: `Grievance redressal.`, text: `Raise a complaint with our Grievance Officer (Section 16).` },
          { lead: `Nominate.`, text: `Name another person to exercise your rights if you die or become incapacitated.` },
        ],
      },
      { type: 'p', text: `We may need to verify your identity before acting. We do not charge a fee for these requests. We will respond within 30 days.` },
      { type: 'p', text: `You also have duties under the DPDP Act. Please give us accurate information, do not impersonate anyone, and do not file false or frivolous complaints.` },
    ],
  },
  {
    heading: `12. Children`,
    blocks: [
      { type: 'p', text: `The Platform is meant for adults aged 18 and above. A minor may travel under a booking or permit made by a parent or lawful guardian, who must submit the child's details and give verifiable consent. We do not track children, monitor their behaviour or direct advertising at them. If we learn that we hold a child's data without such consent, we will delete it.` },
    ],
  },
  {
    heading: `13. Job applicants and staff`,
    blocks: [
      { type: 'p', text: `If you apply for a role with us, we use your applicant data to assess your suitability, verify your qualifications and references, and contact you about the role. Recruiters and the hiring managers for that role are the only people who see it.` },
      { type: 'p', text: `We may run background or reference checks only after telling you and, where required, with your consent. If you are not selected, we keep your application for the period in Section 8 so we can consider you for future openings. You may ask us to delete it earlier.` },
      { type: 'p', text: `Personal data of employees is handled under our internal employee privacy notice, given at the time of joining.` },
    ],
  },
  {
    heading: `14. Third-party links`,
    blocks: [
      { type: 'p', text: `The Platform may link to government portals, partner websites, maps and payment pages. Their privacy practices are their own. Please read their policies before sharing your data with them.` },
    ],
  },
  {
    heading: `15. Changes to this Policy`,
    blocks: [
      { type: 'p', text: `We may update this Policy when our services or the law change. The latest version will always be on this page with its effective date. If a change is significant, we will notify you by email, SMS or a notice on the Platform before it takes effect. Where a change needs fresh consent, we will ask for it.` },
    ],
  },
  {
    heading: `16. Grievance Officer and contact`,
    blocks: [
      { type: 'p', text: `For any question, request or complaint about your personal data, contact our Grievance Officer:` },
      {
        type: 'table',
        rows: [
          [`Name`, `Soruno Kent`],
          [`Designation`, `Operations Head`],
          [`Company`, `Kemjet Himalog Technologies Private Limited`],
          [`Address`, `New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh 790104`],
          [`Email`, `grievances@kemjethimalog.com`],
          [`Phone`, `+91 9282041426, Monday to Friday, 10:00 am to 6:00 pm IST`],
        ],
      },
      { type: 'p', text: `We will acknowledge your complaint within 48 hours and resolve it within 30 days of receipt.` },
      { type: 'p', text: `If you are not satisfied with our response, you may approach the Data Protection Board of India once you have used the grievance process above.` },
    ],
  },
  {
    heading: `17. Governing law`,
    blocks: [
      { type: 'p', text: `This Policy is governed by the laws of India. It should be read with our Website Terms and Conditions.` },
    ],
  },
]

export const termsSections: LegalSection[] = [
  {
    heading: `1. Acceptance of these Terms`,
    blocks: [
      { type: 'p', text: `These Terms and Conditions ("Terms") are a binding agreement between you and Kemjet Himalog Technologies Private Limited, CIN U52210AR2026PTC014371, GSTIN 12AAMCK6025G1ZQ, with its registered office at New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh – 790104 ("Company", "we", "us", "our").` },
      { type: 'p', text: `They govern your use of https://kemjethimalog.com, its state-specific sub-sites and directories, and any related mobile application (together, the "Platform"). By accessing the Platform, creating an account or placing a request, you agree to these Terms and to our Privacy Policy. If you do not agree, please do not use the Platform.` },
      { type: 'p', text: `This document is an electronic record under the Information Technology Act, 2000 and does not need a physical or digital signature.` },
    ],
  },
  {
    heading: `2. Definitions`,
    blocks: [
      {
        type: 'ul',
        items: [
          { lead: `Services`, text: `means the permit assistance, hotel booking and taxi booking services offered through the Platform.` },
          { lead: `User, you`, text: `means any person who visits the Platform or uses the Services.` },
          { lead: `Service Partner`, text: `means an independent hotel, homestay, taxi operator, driver or other third party who delivers a service booked through the Platform.` },
          { lead: `Permit`, text: `means an Inner Line Permit, Protected Area Permit or any other entry or travel authorisation issued by a government authority.` },
          { lead: `Authority`, text: `means the government department or officer that issues a Permit.` },
          { lead: `Booking`, text: `means a confirmed request for a Service, for which we have issued a confirmation.` },
          { lead: `Service Fee`, text: `means the fee we charge for our facilitation, separate from government fees and Service Partner charges.` },
        ],
      },
    ],
  },
  {
    heading: `3. Eligibility`,
    blocks: [
      { type: 'p', text: `You must be at least 18 years old and able to enter a contract under the Indian Contract Act, 1872. A parent or lawful guardian may make a Booking or Permit request for a minor. If you use the Platform for a company or group, you confirm that you are authorised to bind it.` },
    ],
  },
  {
    heading: `4. Your account`,
    blocks: [
      {
        type: 'ul',
        items: [
          `Give accurate, current and complete information when you register and keep it updated.`,
          `Keep your password and OTPs confidential. You are responsible for all activity under your account.`,
          `Tell us at once at support@kemjethimalog.com if you suspect unauthorised use.`,
          `One person may hold only one account, unless we agree otherwise.`,
        ],
      },
      { type: 'p', text: `We may suspend or close an account that has false information, is used for fraud, or breaches these Terms.` },
    ],
  },
  {
    heading: `5. Our role`,
    blocks: [
      { type: 'p', text: `We are a facilitator. We connect you with Authorities and Service Partners and help you complete the request. We do not own or operate hotels or taxis, and we do not issue Permits.` },
      { type: 'p', text: `Your contract for a hotel stay or taxi ride is with the Service Partner. The Service Partner is solely responsible for the quality, safety and delivery of that service. Our responsibility is limited to passing on your Booking correctly and handling payment and support as described in these Terms.` },
    ],
  },
  {
    heading: `6. Permit services`,
    blocks: [
      {
        type: 'ul',
        items: [
          `We prepare and submit your Permit application to the Authority using the information and documents you give us.`,
          `The Authority alone decides whether to grant, refuse, delay, restrict or cancel a Permit. We do not guarantee approval or any processing time. Timelines shown on the Platform are estimates.`,
          `You must give true, complete and legible details and valid documents for every traveller. You authorise us to submit them to the Authority on your behalf.`,
          `Submitting false information or forged documents is an offence. We may refuse the request, keep the Service Fee and report the matter to the Authority.`,
          `Check the Permit as soon as you receive it and tell us of any error within 24 hours.`,
          `You must carry the Permit and original ID while travelling, and follow its conditions, including permitted areas, entry points and duration of stay.`,
          `Permit rules differ by state and by category of traveller, including foreign nationals. Rules can change without notice. The current rule of the Authority prevails over anything on the Platform.`,
        ],
      },
    ],
  },
  {
    heading: `7. Hotel and taxi services`,
    blocks: [
      { type: 'subheading', text: `Hotels and Homestays` },
      {
        type: 'ul',
        items: [
          `Room descriptions, photos, amenities and star ratings are supplied by the Service Partner. We do not verify each detail.`,
          `Check-in and check-out times, ID requirements, guest limits and house rules are set by the property. Hotels are required by law to record a valid ID for every guest.`,
          `A property may refuse check-in to a guest without valid ID or a required Permit. No refund is due from us in that case.`,
        ],
      },
      { type: 'subheading', text: `Taxis` },
      {
        type: 'ul',
        items: [
          `Vehicles and drivers are provided by independent operators who hold their own licences, permits and insurance.`,
          `The fare covers the route and inclusions shown in your Booking confirmation. Tolls, parking, entry fees, night charges, waiting time and extra kilometres are payable separately unless stated as included.`,
          `Travel times in hill areas are affected by weather, landslides, roadworks, strikes and checks at entry gates. Estimated times are not guaranteed.`,
          `The driver may refuse a route that is unsafe, closed or not allowed under the vehicle's permit.`,
          `You are responsible for your luggage and belongings. Carrying illegal goods is prohibited.`,
        ],
      },
      { type: 'p', text: `A Booking is confirmed only when you receive our confirmation by SMS, WhatsApp, email or on the Platform. If a Service Partner cannot honour a confirmed Booking, we will offer a comparable alternative or a full refund of the amount you paid for it.` },
    ],
  },
  {
    heading: `8. Prices and payment`,
    blocks: [
      {
        type: 'ul',
        items: [
          `All prices are in Indian Rupees. The total price, with a break-up of government fees, Service Partner charges, our Service Fee and taxes, is shown before you pay.`,
          `Government Permit fees are set by the Authority and are passed on at actuals.`,
          `Prices can change until a Booking is confirmed. A confirmed Booking is honoured at the confirmed price, except for a change in government fees or taxes.`,
          `Payment is accepted by UPI, cards, net banking and wallets through our payment gateway. We do not store your card or UPI credentials.`,
          `If a payment is debited but the Booking fails, the amount is reversed to the original payment method within 5 to 7 working days.`,
          `If a listed price is an obvious error, we may cancel the Booking and refund you in full.`,
          `A GST invoice is issued for our Service Fee. Service Partners issue their own invoices where applicable.`,
        ],
      },
    ],
  },
  {
    heading: `9. Cancellation and refunds`,
    blocks: [
      { type: 'p', text: `Send cancellation requests through your account or to [support email]. The time we receive the request decides the slab that applies.` },
      {
        type: 'table',
        headers: [`Service`, `If you cancel`, `Refund`],
        rows: [
          [`Permit`, `Before we submit the application`, `Full amount, less ₹__ processing charge`],
          [`Permit`, `After submission to the Authority`, `No refund of government fee or Service Fee`],
          [`Permit`, `Rejected by the Authority`, `No refund of government fee; Service Fee (refunded / not refunded)`],
          [`Hotel`, `72 hours or more before check-in`, `Full amount, less our Service Fee`],
          [`Hotel`, `Less than 72 hours before check-in, or no-show`, `As per the property's policy shown at booking; may be nil`],
          [`Taxi`, `24 hours or more before pick-up`, `Full amount, less our Service Fee`],
          [`Taxi`, `Less than 24 hours before pick-up, or no-show`, `50% of the fare, or nil for no-show`],
        ],
      },
      {
        type: 'ul',
        items: [
          `Where a property or operator shows a stricter or more lenient policy on the Booking page, that policy applies to the Booking.`,
          `If we or a Service Partner cancel, you receive a full refund of the amount paid for that service, or an alternative if you accept it.`,
          `Approved refunds are sent to the original payment method within 7 to 10 working days. Your bank may take longer to credit it.`,
          `Changes to dates, names or routes are subject to availability and any price difference.`,
          `No refund is due for services you do not use, leave early or miss because of a refused or delayed Permit, missing ID, or your late arrival.`,
        ],
      },
    ],
  },
  {
    heading: `10. Acceptable use`,
    blocks: [
      { type: 'p', text: `You agree not to:` },
      {
        type: 'ul',
        items: [
          `give false information or upload forged, altered or someone else's documents;`,
          `make speculative, duplicate or fraudulent Bookings;`,
          `use the Platform for any unlawful purpose or to enter a restricted area without a valid Permit;`,
          `copy, scrape, reverse engineer or resell the Platform or its content;`,
          `introduce malware, overload our servers or try to bypass security;`,
          `post content that is defamatory, obscene, hateful, threatening, or that infringes another person's rights;`,
          `harass or abuse our staff, drivers, hotel staff or other users;`,
          `deal directly with a Service Partner to avoid our Service Fee on a Booking made through us.`,
        ],
      },
      { type: 'p', text: `We may remove content, cancel Bookings and suspend accounts that breach this section, and report unlawful activity to the authorities.` },
    ],
  },
  {
    heading: `11. Reviews and user content`,
    blocks: [
      { type: 'p', text: `You keep ownership of the reviews, photos and feedback you post. You give us a free, worldwide, non-exclusive licence to use, display and adapt them in connection with the Platform and our marketing.` },
      { type: 'p', text: `Reviews must be honest, based on your own experience and free of abuse. We may moderate or remove content that breaches these Terms.` },
    ],
  },
  {
    heading: `12. Intellectual property`,
    blocks: [
      { type: 'p', text: `The Platform, its software, text, design, logos, the names Kemjet and all related trademarks belong to the Company or its licensors. You receive a limited, personal, non-transferable right to use the Platform for booking Services. No other right is granted. Service Partner names, logos and photos belong to their owners.` },
      { type: 'p', text: `If you believe content on the Platform infringes your copyright, write to our Grievance Officer with details of the work and the location of the content.` },
    ],
  },
  {
    heading: `13. Third-party links and services`,
    blocks: [
      { type: 'p', text: `The Platform links to government portals, payment gateways, maps and partner websites. We do not control them and are not responsible for their content, availability or terms. Your use of them is at your own risk.` },
    ],
  },
  {
    heading: `14. Disclaimers and limitation of liability`,
    blocks: [
      { type: 'p', text: `The Platform and its content are provided on an "as is" and "as available" basis. We work to keep information accurate and the Platform running, but we do not promise that it will be error-free or uninterrupted.` },
      { type: 'p', text: `To the extent the law allows, we are not liable for:` },
      {
        type: 'ul',
        items: [
          `a decision, delay or change of rule by any Authority;`,
          `the acts, omissions, service quality or safety of any Service Partner;`,
          `loss caused by wrong or incomplete information that you gave us;`,
          `events beyond our reasonable control, including natural disasters, landslides, floods, bad weather, road closures, bandhs, strikes, curfews, epidemics, government orders, and network or power failures;`,
          `indirect or consequential loss, such as missed connections, lost holidays or lost profit.`,
        ],
      },
      { type: 'p', text: `Our total liability for any claim relating to a Booking is limited to the amount you paid us for that Booking.` },
      { type: 'p', text: `Nothing in these Terms excludes liability that cannot be excluded by law, including liability for fraud or for death or personal injury caused by our negligence. Your rights under the Consumer Protection Act, 2019 are not affected.` },
    ],
  },
  {
    heading: `15. Indemnity`,
    blocks: [
      { type: 'p', text: `You agree to compensate the Company, its directors, employees and affiliates for any claim, penalty, loss or cost, including reasonable legal fees, arising from your breach of these Terms, your breach of any law or Permit condition, or false information or documents supplied by you.` },
    ],
  },
  {
    heading: `16. Governing law and disputes`,
    blocks: [
      { type: 'p', text: `These Terms are governed by the laws of India.` },
      {
        type: 'ol',
        items: [
          { lead: `Talk to us first.`, text: `Raise the issue with our Grievance Officer under Section 17. Most issues are settled at this stage.` },
          { lead: `Arbitration.`, text: `A dispute not settled within 30 days will be referred to a sole arbitrator appointed by mutual agreement, under the Arbitration and Conciliation Act, 1996. The seat of arbitration is Tawang, Arunachal Pradesh and the language is English.` },
          { lead: `Courts.`, text: `Subject to the above, the courts at Tawang, Arunachal Pradesh have exclusive jurisdiction.` },
        ],
      },
      { type: 'p', text: `Nothing here stops you from approaching a consumer commission that has jurisdiction under the Consumer Protection Act, 2019.` },
    ],
  },
  {
    heading: `17. Grievance redressal and contact`,
    blocks: [
      {
        type: 'table',
        rows: [
          [`Grievance Officer`, `Soruno Kent, Operations Head`],
          [`Company`, `Kemjet Himalog Technologies Private Limited`],
          [`Address`, `New Shyo Village, Lower Monastery Road, Tawang, Arunachal Pradesh – 790104`],
          [`Email`, `grievances@kemjethimalog.com`],
          [`Phone`, `+91 9282041426, Monday to Friday, 10:00 am to 6:00 pm IST`],
          [`Customer support`, `support@kemjethimalog.com · 1800-202-0853`],
        ],
      },
      { type: 'p', text: `We acknowledge every complaint within 48 hours and resolve it within one month of receipt.` },
    ],
  },
  {
    heading: `18. Privacy`,
    blocks: [
      { type: 'p', text: `Our Privacy Policy explains how we collect and use your personal data. It forms part of these Terms.` },
    ],
  },
  {
    heading: `19. Changes to the Platform and these Terms`,
    blocks: [
      { type: 'p', text: `We may add, change or withdraw any feature or Service. We may update these Terms from time to time. The latest version, with its effective date, will be on this page. Significant changes will be notified by email, SMS or a notice on the Platform. A Booking is governed by the Terms in force when it was confirmed. Continued use of the Platform after a change means you accept the updated Terms.` },
    ],
  },
  {
    heading: `20. Termination`,
    blocks: [
      { type: 'p', text: `You may close your account at any time by writing to support@kemjethimalog.com. We may suspend or end your access if you breach these Terms or if the law requires it. Confirmed Bookings, payment obligations, and Sections 12, 14, 15 and 16 continue after termination.` },
    ],
  },
  {
    heading: `21. General`,
    blocks: [
      {
        type: 'ul',
        items: [
          { lead: `Entire agreement.`, text: `These Terms, the Privacy Policy and your Booking confirmation are the whole agreement between you and us for the Services.` },
          { lead: `Severability.`, text: `If a court finds any clause invalid, the rest stays in force.` },
          { lead: `No waiver.`, text: `A delay in enforcing a right is not a waiver of it.` },
          { lead: `Assignment.`, text: `You may not transfer your rights under these Terms. We may transfer ours to an affiliate or successor.` },
          { lead: `Notices.`, text: `We send notices to the email or mobile number on your account. Send notices to us at the address in Section 17.` },
          { lead: `Language.`, text: `If these Terms are translated, the English version prevails.` },
        ],
      },
    ],
  },
]