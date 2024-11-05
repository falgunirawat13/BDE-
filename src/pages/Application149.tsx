import React from 'react';
import { Table, Form } from 'react-bootstrap'; // Correct import for Form

const Application149 = () => {
  return (
    <>
      <div>
        {' '}
        <h2 className="font-bold text-black text-center mb-2 fs-4 p-2">
          Indian Register Quality Systems
          <br />
          [A Division of IRCLASS Systems & Solutions Pvt. Ltd.]
        </h2>
        <h2 className="font-bold text-black text-center mb-2 fs-3">
          Application Form – Cyber Audit
        </h2>
      </div>
      <div>
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">
          01. Company and Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {/* Field: Company Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name of the Company
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Address */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Address
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Invoice Address */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Invoice Address(If Different)
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Telephone No */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Telephone No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Pin Code */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Pin Code
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Email ID */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Email ID
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: Website */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Website
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: FAX No */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              FAX No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              PAN No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: TAN No */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              TAN No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: GST No */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              GST No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4 mb-3">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-2">
              CISO ( Chief Information Security Officer) / DPO (Data Processing
              Officer)
            </label>

            <div className="p-2 border rounded-lg bg-white text-black">
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Designation:
                </label>
                <input
                  type="text"
                  placeholder="designation"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Phone No.:
                </label>
                <input
                  type="email"
                  placeholder="Phone No."
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Mobile No.:
                </label>
                <input
                  type="email"
                  placeholder="Mobile No."
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              <div className="flex items-center">
                <label className="font-medium text-black dark:text-white mr-2">
                  E-mail :
                </label>
                <input
                  type="tel"
                  placeholder="E-mail"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-2 mt-4 ">
          <label className="font-medium text-black dark:text-white col-span-2">
            Is your firm part of some large organisation?
          </label>

          <div className="flex items-center space-x-15 col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="yesOption"
                className="mr-2 h-5 w-5 cursor-pointer"
              />
              <label
                htmlFor="yesOption"
                className="text-lg text-black dark:text-white"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noOption"
                className="mr-2 h-5 w-5 cursor-pointer"
              />
              <label
                htmlFor="noOption"
                className="text-lg text-black dark:text-white"
              >
                No
              </label>
            </div>
          </div>

          <label className="font-medium text-black dark:text-white col-span-2">
            If ' Yes,' give name of holding company
          </label>
          <div className="p-2 border rounded-lg bg-white text-black col-span-2">
            <input type="text" className="w-full bg-transparent cursor-text" />
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-1 fs-6">
          Scope of Cyber Audit:
        </h2>
        <p className="font-medium text-black mb-2">
          This questionnaire should help gather comprehensive information about
          the gold manufacturing company's business processes, technology
          infrastructure, cybersecurity practices, and potential areas of
          concern or improvement
        </p>
        <div className="p-2 border rounded-lg bg-white text-black">
          <input type="text" className="w-full bg-transparent cursor-text" />
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          02. General Information:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          {/* Question 1 */}
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              1) Provide a brief overview of your gold manufacturing process,
              highlighting the integration of advanced machinery and technology.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              2) What are the key stages of your manufacturing process, and how
              do advanced machines contribute to efficiency and quality control?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              3) Are there any specific cybersecurity concerns or risks
              associated with the use of advanced machinery in your
              manufacturing operations?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          03. Technology Infrastructure:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              1) Provide a detailed overview of your IT infrastructure,
              including hardware, software, and network components.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              2) List all servers, workstations, routers, switches, firewalls,
              and other network devices used in your environment.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              3) Describe any virtualization technologies, cloud services, or
              remote access solutions employed or third-party vendors.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              4) What types of technology do you currently utilize in your
              manufacturing processes?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              5) Do you use any specific software or systems for inventory
              management, production control, or other operational tasks?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              6) Detail your network architecture, including segmentation,
              VLANs, and perimeter security controls.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              7) Outline the firewall rules, access control lists (ACLs), and
              intrusion detection/prevention systems (IDS/IPS) in place.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          04. Data Protection and Security:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              1) How do you currently protect your sensitive data (financial,
              customer information, intellectual property)?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              2) Do you have any data encryption measures in place?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              3) What measures do you have to prevent unauthorized access to
              your systems and data?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              4) Have you experienced any security breaches or incidents in the
              past? If yes, please provide details.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              5) Explain the procedures for data backup, recovery, and disaster
              recovery to ensure data integrity and availability.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          05. Incident Response Plan:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Do you have an incident response plan in place? If yes, can you
              provide an overview?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) Who is responsible for managing cybersecurity incidents within
              your organization?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              3) How quickly can you respond to a cybersecurity incident?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              4) What procedures do you have in place for notifying stakeholders
              in the event of a security breach?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              5) Detail incident detection mechanisms, including log monitoring,
              SIEM (Security Information and Event Management) solutions, and
              anomaly detection systems.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              6) Describe the procedures for identifying, analyzing, and
              responding to security incidents, including containment,
              eradication, and recovery steps.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          06. Compliance and Regulations:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Are you compliant with any specific cybersecurity regulations
              or standards? (e.g., GDPR, ISO 27001, NIST, IEC)
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) How frequently do you conduct cybersecurity audits or
              assessments?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              3) Are there any industry-specific regulations or standards that
              you need to adhere to?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          07. Vendor and Third-Party Relationships:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Do you engage with any third-party vendors or service providers
              who have access to your systems or data?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) How do you ensure the security of your data when working with
              external partners or suppliers?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          08. Disaster Recovery and Business Continuity:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Do you have a disaster recovery plan in place?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) How do you ensure business continuity in the event of a
              cybersecurity incident or other disruptions?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              3) Have you tested your disaster recovery and business continuity
              plans? If yes, how frequently?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          09. Employee Training and Awareness:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Do you provide cybersecurity training for your employees? If
              yes, how often?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) How do you raise awareness among your employees about
              cybersecurity threats and best practices?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          10. Future Plans and Concerns:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Are there any upcoming changes or expansions in your business
              that may impact your cybersecurity posture?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              2) What are your primary concerns or challenges regarding
              cybersecurity?
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          11. Additional Information:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2 text-justify">
              1) Please provide any additional information or documents relevant
              to cybersecurity within your organization.
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-5 mb-1">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name :
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          <div className="flex flex-col ml-5">
            <label className="font-medium text-black dark:text-white mb-1">
              Position:
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Signature:
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          <div className="flex flex-col ml-5">
            <label className="font-medium text-black dark:text-white mb-1">
              Date:
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center align-middle mt-7">
        <h3>Indian Register Quality Systems</h3>
        <p className="text-sm text-muted">
          2nd Floor, New Building, 52 A, Adi Shankaracharya Marg, Powai, Mumbai
          - 400 072. <br />
          Tel. No.: +91 22 3051 9800 Fax No.: +91 22 2570 3611, E-mail:
          irqs@irclass.org Website: www.irqs.co.in
        </p>
      </div>
    </>
  );
};

export default Application149;
