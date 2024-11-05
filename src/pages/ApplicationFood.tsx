import React from 'react';
import { Form, Table } from 'react-bootstrap';

const ApplicationFood = () => {
  return (
    <>
      <div>
        {' '}
        <h2 className="font-bold text-black text-center mb-2 fs-4 p-2">
          Indian Register Quality Systems
          <br />
          [A Division of IRCLASS Systems & Solutions Pvt. Ltd.]
        </h2>
        <h2 className="font-bold text-black text-center mb-4 fs-3">
          Application Form – Food Scheme(s)
        </h2>
        <h4 className="font-bold text-black mt-4 mb-4 fs-8">
          Note: PLEASE COMPLETE IN CAPITALS
        </h4>
        <h4 className="font-bold text-black mt-4 mb-4 fs-8">
          Date of application: DD/MM/YYYY
        </h4>
      </div>
      <div>
        <h2 className="font-bold text-black mb-4 mt-4 fs-5">
          Certification Applied For:
        </h2>
        <div className="grid grid-cols-4 gap-2 mb-6 space-y-4">
          {/* Checkbox Option 1 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="freshCertificate"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="freshCertificate"
              className="font-medium text-black dark:text-white"
            >
              ISO 22000
            </label>
          </div>

          {/* Checkbox Option 2 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="renewalCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="renewalCertification"
              className="font-medium text-black dark:text-white"
            >
              FSSC 22000
            </label>
          </div>

          {/* Checkbox Option 3 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="transferOfCertificate"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="transferOfCertificate"
              className="font-medium text-black dark:text-white"
            >
              FSSAI Schedule 4
            </label>
          </div>

          {/* Checkbox Option 4 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="scopeExtension"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="scopeExtension"
              className="font-medium text-black dark:text-white"
            >
              Food GMP
            </label>
          </div>

          {/* Additional Checkboxes */}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="haccpCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="haccpCertification"
              className="font-medium text-black dark:text-white"
            >
              FSSC development programme
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="glutenFreeCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="glutenFreeCertification"
              className="font-medium text-black dark:text-white"
            >
              Hygiene Rating
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="organicCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="organicCertification"
              className="font-medium text-black dark:text-white"
            >
              FSSAI Third Party Food Safety audits
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="kosherCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="kosherCertification"
              className="font-medium text-black dark:text-white"
            >
              FAMI QS
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="kosherCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="kosherCertification"
              className="font-medium text-black dark:text-white"
            >
              BRCGS – Food Safety
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="kosherCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="kosherCertification"
              className="font-medium text-black dark:text-white"
            >
              BRCGS Start !
            </label>
          </div>
          <div className="flex items-center space-x-2 col-span-2">
            <input
              type="checkbox"
              id="kosherCertification"
              className="cursor-pointer h-6 w-6"
            />
            <label
              htmlFor="kosherCertification"
              className="font-medium text-black dark:text-white"
            >
              INDIA CONFORMITY ASSESSMENT SCHEME (i-CAS) for HALAL PRODUCTS
            </label>
          </div>

          <div className="flex items-center space-x-8 col-span-3">
            <h2 className="font-medium text-black dark:text-white ">
              Others :
            </h2>
            <input
              type="text"
              className="p-2 border rounded bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
        {/*section 1 */}
        <h2 className="font-bold text-black mb-2 mt-12 fs-5">
          1. Company and Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {/* Field: Company Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
              Website
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Field: PAN No */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
              GST No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Annual Turnover
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-3">
          {/* Field: Director / CEO / Partner */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Director / CEO / Partner
            </label>

            <div className="p-2 border rounded-lg bg-white text-black">
              {/* Name Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Mobile Field */}
              <div className="flex items-center">
                <label className="font-medium text-black dark:text-white mr-2">
                  Mobile:
                </label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Food Safety Team Leader / MR
            </label>

            <div className="p-2 border rounded-lg bg-white text-black">
              {/* Name Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Mobile Field */}
              <div className="flex items-center">
                <label className="font-medium text-black dark:text-white mr-2">
                  Mobile:
                </label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <label className="font-medium text-black dark:text-white mb-2 mt-3">
            Is your firm part of some large organization?
          </label>
          <div className="flex items-center space-x-20 ml-2 mb-3">
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
                id="NoOption"
                className="mr-2 h-5 w-5 cursor-pointer"
              />
              <label
                htmlFor="yesOption"
                className="text-lg text-black dark:text-white"
              >
                No
              </label>
            </div>
          </div>
          <label className="font-medium text-black dark:text-white mb-2 mt-4">
            If 'Yes' give name of holding company
          </label>
          <input
            type="text"
            placeholder="Holding Company Name"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        {/*section 2 */}
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <h2 className="font-bold text-black mb-2 mt-4 fs-5">
            2. Business activity (product,. Processes and/or services)
            <br />
            (Also attach your Process Flow Diagram, product profile/ company
            profile / service brochure)
          </h2>
          <input
            type="text"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        {/*section 3 */}
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          {/* Scope of Certification */}
          <div className="flex items-center mb-2">
            <h2 className="font-bold text-black mb-4 mt-4 fs-5">
              3. Scope of Certification:
            </h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1 ml-12"
            />
          </div>
          <p className="font-medium text-black mb-1">
            Explanation for multi site certification: <br />
            Multi-site is applicable only to organisation with more than 20
            sites
            <br />
            Use separate sheet of paper to provide following multisite details .{' '}
            <br />
            a) Kindly mention scope of activities site wise (to be filed if
            different activities are carried out in different sites) <br />
            b) Central Site (At which FSMS centrally controlled and
            administered)
            <br /> c) Time required for travelling between sites
          </p>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <h2 className="font-bold text-black mb-2 mt-2 fs-5">
            Scope of single site certification:
          </h2>
          <input
            type="text"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
          <h2 className="font-bold text-black mb-3 mt-4 fs-5">
            List of all products produced / services rendered at the site(s)
          </h2>
          <input
            type="text"
            className="p-2 mt-1 mb-3 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        {/*Section 4*/}
        <h2 className="font-bold text-black mb-4 mt-6 fs-5">
          4. Please put tick on the Type of Certification & Accreditation:
        </h2>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {/* Checkbox Option 1 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="freshCertificate"
              className="cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="freshCertificate"
              className="font-medium text-black dark:text-white"
            >
              Fresh Certificate
            </label>
          </div>

          {/* Checkbox Option 2 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="renewalCertification"
              className="cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="renewalCertification"
              className="font-medium  text-black dark:text-white"
            >
              Renewal Certification
            </label>
          </div>

          {/* Checkbox Option 3 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="transferOfCertificate"
              className="cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="transferOfCertificate"
              className="font-medium text-black dark:text-white"
            >
              Transfer of Certificate
            </label>
          </div>

          {/* Checkbox Option 4 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="scopeExtension"
              className="cursor-pointer h-5 w-5"
            />
            <label
              htmlFor="scopeExtension"
              className="font-medium  text-black dark:text-white"
            >
              Scope Extension
            </label>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-6 ">
          <label className="font-medium text-black dark:text-white col-span-2 mt-3">
            Accreditation required?
          </label>

          <div className="flex items-center space-x-10 col-span-2">
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

          <label className="font-medium text-black dark:text-white col-span-2 mt-4">
            No. of Surveillance Audits Required
          </label>
          <div className="flex items-center space-x-16 col-span-2">
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
                6 monthly
              </label>
            </div>
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
                9 monthly
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
                Annual
              </label>
            </div>
          </div>
        </div>
        <p className="font-medium text-black mb-4">
          To be filled for application for Renewal / Transfer Certification:
          <br />
          [Any changes in the Management System / Operations / Production Line /
          Location vis-à-vis last audit / Supply Chain Link]
        </p>
        <div className="p-2 border rounded-lg bg-white text-black mb-10">
          <input type="text" className="w-full bg-transparent cursor-text" />
        </div>
        {/*section 5 */}
        <h2 className="font-bold text-black mb-4 mt-6 fs-5">
          5. Details of operations in the Main Unit / Head office
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-8">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              Day of “No Production” (e.g. Weekly Off, Power shutdown) &
              <br />
              Daily Working Timing
              <br />
              Public Holidays
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Number of work shifts
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Number of Employee per shift
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Black out period (when the organization is not operating for
              legitimate business reasons.)
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Season of Operation
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Language of Communication
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Outsourced Processes (if any)
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Exclusions
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Approvals / Statutory & Regulatory requirements / Legal status
              <br />
              e.g FSSAI License number with Validity for India
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              List of Functions [e.g. Production, QC, Design, Purchase, etc.]
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              In-house laboratory
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Product Development (R&D)
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Intended user is Vulnerable to specific food safety hazard
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              Any Activity belonging to the same legal entity of the parent
              organization applied for Certification
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              For Dairy Units: Number of Collection Centres/ Milk Chilling
              centres belonging to the same legal entity of the parent
              organization applied for Certification
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
              For BRCGS Audit : Announced or Unannounced
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
            <label className="font-medium text-black dark:text-white mb-1 mt-2 pb-2 col-span-2 text-justify">
            In case of Multi sites ( sites nore than 20 ), Please confirm that the organization has
            conducted an internal audit for each site within one year prior to certification
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
        {/*section 6 */}
        <h2 className="font-bold text-black mb-4 mt-6 fs-5">
          6. Details of Sites
        </h2>
        <Table responsive="md" bordered>
          <tbody>
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '20%' }}
                rowSpan={2}
              >
                Total Number of Sites/Locations
              </th>
              <th colSpan={2} className="p-2 text-center align-middle">
                Number of Sites/Locations
              </th>
              <th colSpan={2} className="p-2 text-center align-middle">
                Additional for scope extension
              </th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle">Permanent</th>
              <th className="p-2 text-center align-middle">Temporary</th>
              <th className="p-2 text-center align-middle">Permanent</th>
              <th className="p-2 text-center align-middle">Temporary</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </Table>
        <Table bordered>
          <thead>
            <tr>
              <th rowSpan={2} className="text-center align-middle">
                Name & Address of Sites / Location - Permanent{' '}
              </th>
              <th rowSpan={2} colSpan={2} className="text-center align-middle">
                Particulars
              </th>
              <th rowSpan={2} className="text-center align-middle">
                No. of Shifts
              </th>
              <th colSpan={4} className="text-center">
                Nos. of Full Time Employee
              </th>
              <th colSpan={4} className="text-center">
                Nos. of Part Time Employee
              </th>
              <th colSpan={4} className="text-center">
                Nos. of Contract Employee
              </th>
            </tr>

            <tr>
              <th className="text-center align-middle">G</th>
              <th className="text-center align-middle">1</th>
              <th className="text-center align-middle">2</th>
              <th className="text-center align-middle">3</th>
              <th className="text-center align-middle">G</th>
              <th className="text-center align-middle">1</th>
              <th className="text-center align-middle">2</th>
              <th className="text-center align-middle">3</th>
              <th className="text-center align-middle">G</th>
              <th className="text-center align-middle">1</th>
              <th className="text-center align-middle">2</th>
              <th className="text-center align-middle">3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Name:</td>
              <td
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                1)
              </td>
              <td style={{ width: '18%' }}>
                Personnel involved in Security related activities
              </td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td
                rowSpan={6}
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                2)
              </td>
              <td style={{ width: '18%' }}>
                Break-up of Personnel working in different department
              </td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td rowSpan={6}>Address:</td>
              <td>01)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>02)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>03)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>04)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>05)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                3)
              </td>
              <td style={{ width: '18%' }}>
                Is similar activities are carried out in all shifts
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="yesOption"
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor="yesOption"
                    className="text-black dark:text-white"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="NoOption"
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor="yesOption"
                    className="text-black dark:text-white"
                  >
                    No
                  </label>
                </div>
                <br />
                If no briefly described the activities undertaken in each shift.
              </td>
              <td colSpan={13}>
                First Shift : <br />
                <br /> Second Shift : <br />
                <br />
                Third Shift:{' '}
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Site – 1 <br />
                Name :
              </td>
              <td
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                1)
              </td>
              <td style={{ width: '18%' }}>
                Personnel involved in Security related activities
              </td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td
                rowSpan={6}
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                2)
              </td>
              <td style={{ width: '18%' }}>
                Break-up of Personnel working in different department
              </td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td rowSpan={6}>Address:</td>
              <td>01)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>02)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>03)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>04)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td>05)</td>
              <td>
                <Form.Control type="number" placeholder="No. of Shifts" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
              <td>
                <Form.Control type="number" placeholder="General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Shift 3" />
              </td>
            </tr>
            <tr>
              <td
                className="p-3 text-center align-middle"
                style={{ width: '2%' }}
              >
                3)
              </td>
              <td style={{ width: '18%' }}>
                Is similar activities are carried out in all shifts
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="yesOption"
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor="yesOption"
                    className="text-black dark:text-white"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="NoOption"
                    className="mr-2 cursor-pointer"
                  />
                  <label
                    htmlFor="yesOption"
                    className="text-black dark:text-white"
                  >
                    No
                  </label>
                </div>
                <br />
                If no briefly described the activities undertaken in each shift.
              </td>
              <td colSpan={13}>
                First Shift : <br />
                <br /> Second Shift : <br />
                <br />
                Third Shift:{' '}
              </td>
            </tr>
            <tr>
              <td>NOTE:</td>
              <td colSpan={15}>
                Under Break-up of Personnel working in different department, if
                more than 5 Department, please insert the additional rows .
              </td>
            </tr>
          </tbody>
        </Table>
        {/*section 7*/}
        <h2 className="font-bold text-black mb-4 mt-14 fs-5">7. </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              a) No. of products/production lines
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
              b) Building Area (in sq m)
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
              c) Any other certified Management Systems? E.g. ISO 9001:2015, ISO
              14001:2015, ISO 45001:2018 etc. (From IRQS which covers same
              proceses, products and services)
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
            <label className="font-medium text-black dark:text-white mb-2 mt-2 pb-2 col-span-2 text-justify">
              d) Total No. Of O-PRP & CCP more than 10
            </label>
            <div className="flex items-center space-x-20 col-span-2 ml-13">
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
          </div>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <label className="font-medium text-black dark:text-white mb-2 mt-2">
            e) No. of HACCP Study (in case of single site mention HACCP Study
            for main site / for Multisite certification mention site wise HACCP
            Study)
          </label>
          <Table responsive="md" hover bordered className="mt-4">
            <thead></thead>
            <tbody>
              <tr>
                <th
                  className="p-2 text-center align-middle"
                  style={{ width: '25%' }}
                >
                  Main site
                </th>

                <td
                  className="p-2 text-center align-middle"
                  style={{ width: '20%' }}
                >
                  {' '}
                </td>

                <th
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                >
                  Site 4{' '}
                </th>

                <td
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                ></td>
              </tr>
              <tr>
                <th
                  className="p-2 text-center align-middle"
                  style={{ width: '25%' }}
                >
                  Site 2
                </th>

                <td
                  className="p-2 text-center align-middle"
                  style={{ width: '20%' }}
                >
                  {' '}
                </td>

                <th
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                >
                  Site 5{' '}
                </th>

                <td
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                ></td>
              </tr>
              <tr>
                <th
                  className="p-2 text-center align-middle"
                  style={{ width: '25%' }}
                >
                  Site 3
                </th>

                <td
                  className="p-2 text-center align-middle"
                  style={{ width: '20%' }}
                >
                  {' '}
                </td>

                <th
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                >
                  Site 6{' '}
                </th>

                <td
                  className="p-2 text-center  align-middle"
                  style={{ width: '20%' }}
                ></td>
              </tr>
            </tbody>
          </Table>{' '}
          <div className="p-2 border rounded-lg bg-white text-black">
            {/* Name Field */}
            <div className="flex items-center mb-3 mt-2">
              <label className="font-medium text-black dark:text-white mr-2">
                DETAILS of HACCP STUDIES
              </label>
            </div>

            <div className="flex items-center mb-3">
              <label className="font-medium text-black dark:text-white mr-2">
                HACCP Study 1:
              </label>
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent cursor-text"
              />
            </div>

            <div className="flex items-center mb-3">
              <label className="font-medium text-black dark:text-white mr-2">
                HACCP Study 2:
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                className="flex-1 bg-transparent cursor-text"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="font-medium text-black dark:text-white mr-2">
                HACCP Study 3:
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                className="flex-1 bg-transparent cursor-text"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="font-medium text-black dark:text-white mr-2">
                HACCP Study 4:
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                className="flex-1 bg-transparent cursor-text"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="font-medium text-black dark:text-white mr-2">
                HACCP Study 5:
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                className="flex-1 bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        {/*section 8 */}
        <h2 className="font-bold text-black mb-9 mt-10 fs-5">
          8 Attach the following documents along with the duly filled
          Questionnaire: ( FOR FAMI QS Scheme ONLY)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-3">
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              a) Approval letter from FAMI-QS – product list
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              b) Licence documents for the Operator’s operations;
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              c) List of ingredients purchased from non-assured suppliers
              (processing aids/intermediates are excluded);
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              d) Information about production site(s);
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              e) Externally provided services (contract manufacturers,
              warehouses);
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              f) Audit report from the subcontractor(s) (toll manufacturer(s),
              supplier(s);
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              g) Countries where the products are placed.
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
        </div>
        {/*section 9 */}
        <h2 className="font-bold text-black mb-4 mt-14 fs-5">
          9 Attach the following documents along with the duly filled
          Questionnaire: ( FOR Halal Scheme ONLY)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-3">
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              a) Legal status
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              b) List of raw material(s)
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              c) Process details
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              d) Food Safety Management system issues
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
          <div className="flex items-center space-x-10 col-span-4">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8">
              e) HACCP analysis plan
            </h2>
          </div>
          <div className="flex items-center space-x-20 col-span-2">
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
        </div>
        {/*section 10 */}
        <h2 className="font-bold text-black mb-4 mt-14 fs-5">
          10. Name and contact details of the Management System Consultant /
          Advisor/ External expert:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-3">
          {/* Field: Director / CEO / Partner */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Consultant
            </label>

            <div className="p-2 border rounded-lg bg-white text-black">
              {/* Name Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Mobile Field */}
              <div className="flex items-center">
                <label className="font-medium text-black dark:text-white mr-2">
                  Mobile:
                </label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Consultancy Firm
            </label>

            <div className="p-2 border rounded-lg bg-white text-black">
              {/* Name Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center mb-2">
                <label className="font-medium text-black dark:text-white mr-2">
                  Fax No.
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>

              {/* Mobile Field */}
              <div className="flex items-center">
                <label className="font-medium text-black dark:text-white mr-2">
                  Telephone No.:
                </label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="flex-1 bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        {/*section 11*/}
        <h2 className="font-bold text-black mb-4 mt-10 fs-5">
          11. Has other Departments [Marine/Industrial Inspection] of Indian
          Register of Shipping (IRS) provided any services to your organisation?
        </h2>
        <div className="flex items-center space-x-20 ml-2 mb-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="yesOption"
              className="mr-2 h-5 w-5 cursor-pointer"
            />
            <label htmlFor="yesOption" className="text-black dark:text-white">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="noOption"
              className="mr-2 h-5 w-5 cursor-pointer"
            />
            <label htmlFor="noOption" className="text-black dark:text-white">
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <label className="font-medium text-black dark:text-white mb-2 mt-2">
            If Yes, please mention the Type of Services provided, last date of
            Service & Name of the Surveyor:
          </label>
          <input
            type="text"
            placeholder="Holding Company Name"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        {/*section 12*/}
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4 mt-4">
          <div className="flex items-center gap-4 mb-2 mt-2">
            <h2 className="font-bold text-black mb-2 mt-2 fs-5">
              12. Expected Audit Date:
            </h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
        {/*section 13*/}
        <h2 className="font-bold text-black mb-4 mt-4 fs-5">
          13. Please Tick on the other Certification Scheme(s) Interested for:
        </h2>
        <Table responsive="md" hover bordered className="">
          <thead></thead>
          <tbody>
            <tr>
              <td className="p-2 text-center align-middle">ISO 9001 </td>

              <td className="p-2 text-center  align-middle">ISO 14001 </td>

              <td className="p-2 text-center  align-middle">ISO 45001 </td>

              <td className="p-2 text-center  align-middle">ISO 27001</td>

              <td className="p-2 text-center  align-middle">IATF 16949 </td>

              <td className="p-2 text-center  align-middle">ISO 28000 </td>

              <td className="p-2 text-center  align-middle">ISO 30000 </td>
              <td className="p-2 text-center  align-middle">ISO 50001</td>
              <td className="p-2 text-center  align-middle">ISO 27701</td>
              <td className="p-2 text-center  align-middle">ISO 21001</td>
              <td className="p-2 text-center  align-middle">ISO 13485 </td>
            </tr>
            <tr>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
              <td className="p-2 text-center align-middle">
                <Form.Check
                  inline
                  type="checkbox"
                  id="checkbox1"
                  style={{ marginLeft: '12px' }}
                />
              </td>
            </tr>
          </tbody>
        </Table>{' '}
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

          <div className="flex flex-col">
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

          <div className="flex flex-col">
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
    </>
  );
};

export default ApplicationFood;
