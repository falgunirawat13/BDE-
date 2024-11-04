import React from 'react';
import { Table, Form } from 'react-bootstrap'; // Correct import for Form

const Application10 = () => {
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
          Application Form – ISO 50001 (EnMS)
        </h2>
        <h4 className="font-bold text-black mt-4 mb-4 fs-8">
          PLEASE COMPLETE IN CAPITALS
        </h4>
      </div>
      <div>
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">
          01. Company Name and Contact Details
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

          {/* Field: PAN No */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3 mb-3">
          {/* Field: Director / CEO / Partner */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
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

          {/* Field: EnMS Coordinator */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              EnMS Coordinator
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
        {/* Field: Large Organization Checkbox */}
        <div className="flex flex-col col-span-1 lg:col-span-2">
          <label className="font-medium text-black dark:text-white mb-2 mt-3">
            Is your firm part of some large organization?
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="yesOption"
                className="mr-1 cursor-pointer"
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
                className="mr-1 cursor-pointer"
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
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <h2 className="font-bold text-black mb-3 mt-5 fs-5">
            02. Business activity (product,. Processes and/or services)
            <br />
            (Also attach your Process Flow Diagram, product profile/ company
            profile / service brochure)
          </h2>
          <input
            type="text"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        {/*section 4*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-3 col-span-3">
            <h2 className="font-bold text-black mb-2 mt-2 fs-5">
              04. Scope of Certification:
            </h2>
            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 col-span-3">
            <label className="font-bold text-black dark:text-white mb-1 mt-2 pb-2 col-span-1 text-justify fs-6">
              EnMS Boundary
            </label>
            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-4">
            <p className="font-medium text-black mb-2">
              Are there more sites (other than the one mentioned above)?
            </p>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <label className="text-black mr-4">No</label>
              <input type="checkbox" className="mr-2" />
              <label className="text-black">Yes</label>
            </div>
            <p className="font-medium text-black mb-2">If yes, are the sites</p>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-black mr-4">Permanent</label>
              <input type="checkbox" className="mr-2" />
              <label className="text-black">
                Temporary (e.g. Construction sites)
              </label>
            </div>
          </div>

          <p className="text-black mb-3">
            Please fill details in the following table. Mention scope of
            activities site wise (to be filled if different activities are
            carried out in different sites: additional lines may be added if
            there are more sites). For multiple sites Annexure A also should be
            filled up for each site.
          </p>
          <p className="font-medium text-black mb-2">Details of sites:</p>
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
              </tr>
              <tr>
                <th className="p-2 text-center align-middle">Permanent</th>
                <th className="p-2 text-center align-middle">Temporary</th>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/*section 6*/}
        <h2 className="font-bold text-black mb-1 mt-4 fs-5">
          06. Personnel Responsible for EnMS.
        </h2>
        <h2 className="text-black mb-4 mt-4 fs-14">
          Number of Personnel responsible for energy management, use and control
          from the total manpower.( including any part time employees and
          persons working on behalf of the organization i.e. contract employees)
          <br />
          Pl. Fill in the data in the table.
          <br />
          <br />
          Note: When reviewing the categories in the table person(s) shall not
          be double counted. Example: In case a person is responsible for two or
          more activities, the person should be counted only once in the total
          number of persons who impact EnMS. e.g Energy team members may also be
          responsible for activities 3,4,5,6 in the table.
        </h2>
        <Table responsive="md" hover bordered className="">
          <tbody>
            <tr>
              <th style={{ width: '5%' }}>Sr No.</th>
              <th className="text-center align-middle" style={{ width: '50%' }}>
                Activity related toEnMS
              </th>
              <th className="text-center align-middle">Heading 2</th>
            </tr>
            <tr>
              <td className="text-center align-middle">1</td>
              <td className="align-middle">
                Top Management (Team if applicable).
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">2</td>
              <td className="align-middle">Energy management team.</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">3</td>
              <td className="text-left align-middle">
                Persons responsible for major changes affecting energy
                performance (e.g. persons responsible for plant renovation,
                maintenance of energy centric equipment, procurement of energy
                centric equipment, etc.).
              </td>

              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">4</td>
              <td className="text-left align-middle">
                Persons responsible for energy planning, identifying SEUs,
                developing, implementing objectives, targets and action plans.
              </td>
              <td></td>
            </tr>

            <tr>
              <td className="text-center align-middle">5</td>
              <td className="align-middle">
                Person(s) responsible for design which affects energy
                performance.
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">6</td>
              <td className="align-middle">
                Person(s) responsible for planning, operating and maintaining
                the processes related to the SEUs including during seasonal
                operations (e.g. harvesting activities, hotels) as appropriate;
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">7</td>
              <td className="text-left align-middle">
                Person(s) responsible for procurement related to energy
                performance;
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">8</td>
              <td className="text-left align-middle">
                Person(s) responsible for developing and maintaining energy data
                and analysis;
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">9</td>
              <td className="text-left align-middle">
                Total number of persons who impact EnMS (sum of 1-8 above)
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <h2 className="font-bold text-black mb-4 mt-4 fs-5">
          07. Please put tick on the Type of Certification & Accreditation:
        </h2>
        <div className="flex space-x-25 mb-4">
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="freshCertificate"
              className="cursor-pointer"
            />
            <label
              htmlFor="freshCertificate"
              className="font-medium text-black dark:text-white "
            >
              Fresh Certificate
            </label>
          </div>

          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="renewalCertification"
              className="cursor-pointer"
            />
            <label
              htmlFor="renewalCertification"
              className="font-medium text-black dark:text-white "
            >
              Renewal Certification
            </label>
          </div>

          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="transferOfCertificate"
              className="cursor-pointer"
            />
            <label
              htmlFor="transferOfCertificate"
              className="font-medium text-black dark:text-white "
            >
              Transfer of Certificate
            </label>
          </div>

          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="scopeExtension"
              className="cursor-pointer"
            />
            <label
              htmlFor="scopeExtension"
              className="font-medium text-black dark:text-white "
            >
              Scope Extension
            </label>
          </div>
        </div>
        <h2 className="font-bold text-black mb-1 mt-4 fs-8">
          Accreditation Required:
        </h2>
        <p className="font-medium text-black mb-1">
          (ANAB accreditation available for all sectors. For NABCB please
          consult IRQS BD personnel for available sector accreditations)
        </p>
        <div className="p-2 border rounded-lg bg-white text-black mb-4">
          <input type="text" className="w-full bg-transparent cursor-text" />
        </div>
        <div className="flex flex-col mb-4">
          <p className="font-medium text-black mb-2">
            To be filled for application for Renewal Certification:
            <br />
            [Any changes in the Management System / Operations / Production Line
            / Location vis-à-vis last audit]
          </p>
          <div className="p-2 border rounded-lg bg-white text-black mb-4">
            <input type="text" className="w-full bg-transparent cursor-text" />
          </div>
          <p className="font-medium text-black mb-2">
            Is your organization certified for any other standard by IRQS or
            other Certification Bodies?
            <br /> If yes please mention the standard numbers and name of CB
            below e.g. ISO 9001, ISO 14001 etc.
          </p>
          <div className="p-2 border rounded-lg bg-white text-black">
            <input type="text" className="w-full bg-transparent cursor-text" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-3 mb-3">
          {/* Certificate Number Row */}
          <div className="flex flex-col">
            <h2 className="font-bold text-black mb-2 mt-1 fs-14">
              If this application is for transfer of existing ISO 50001
              certificate from other CB, please fill details below.
            </h2>
            <label className="font-medium text-black dark:text-white mb-1">
              Certificate Number *
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                placeholder="Certificate Number"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Certificate Valid Till Row */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Certificate Valid Till
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="date"
                placeholder="Certificate Valid Till"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          {/* Certification Body (Previous) Row */}
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Certification Body (Previous)
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                placeholder="Certification Body (Previous)"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          <p className="font-medium text-black dark:text-white mb-1">
            Note: * Attach a copy of the certificate. In case of Transfer,
            Annexure 2 is to be filled (Form attached separately).
          </p>
        </div>
        <h2 className="font-bold text-black mb-2 mt-6 fs-5">
          08. Details of operations in the main unit / Head office
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mb-6">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Product/service at this site
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
              Trade name (if any)
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
              Season of Operation
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
              Language of Communication
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
              Energy centric Outsourced Processes (if any)
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
              Scope of certification
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
              Boundary (EnMS)
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="font-medium text-black dark:text-white mb-1">
              Applicable Statutory & Regulatory requirements related to energy
              e.g. EC Act 2001, PAT Target if received
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-black mb-2 mt-8 fs-5">
          09. Energy Related Information :
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4 ">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2">
              1) Energy centric Core Processes, e.g. Power generation, Cement
              production:
            </label>

            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4 ">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2">
              2) Related energy centric sub processes e.g. grinding, steam
              generation etc.
            </label>

            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4 ">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2">
              3) Major energy consuming equipment e.g. Boiler, furnace, motors,
              HVAC etc.
            </label>

            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4 ">
            <label className="font-medium text-black dark:text-white mb-1 col-span-2">
              4) Energy Sources used e.g. Electricity, Coal, Oil, Steam, Solar
              etc. Refer note in 5) below.
            </label>

            <div className="col-span-2">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4 ">
            <label className="font-medium text-black dark:text-white mb-1 mt-2 col-span-4">
              5) Annual Energy Consumption of each energy sources and total
              energy consumption (Pl. Specify in units -Mtoe, or Gkcal or kWh or
              TJ) <br />
              Note: Only energy sources which contribute to 80% of annual
              consumption should be mentioned. <br />
              e.g Coal accounts for 70%, Electricity 15% and Diesel 5%, other
              balance. In this case consumption of only coal and electricity
              should be entered in the table.
            </label>
          </div>
        </div>
        <Table responsive="md" hover bordered className="">
          <thead></thead>
          <tbody>
            <tr>
              <th className="p-2 text-center align-middle">Energy Source</th>
              <th className="p-2 text-center align-middle">Energy Type</th>
              <th className="p-2 text-center align-middle">
                Annual Consumption
              </th>
              <th className="p-2 text-center align-middle">
                Unit (e.g. kWh/kcal/Kg/Lit)
              </th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle">Energy Source 1</th>
              <th className="p-2 text-center align-middle">Electricity</th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle">
                Energy source 2 - (specify) -
              </th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle">
                Energy source 3 - (specify) -
              </th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle">
                Energy source 4 - (specify) -
              </th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
              <th className="p-2 text-center align-middle"></th>
            </tr>
          </tbody>
        </Table>
        <div className="grid grid-cols-4 col-span-4 mb-1 ">
          <label className="font-medium text-black dark:text-white mb-1 col-span-2">
            6) No. Of SEUs identified (significant energy uses as per ISO
            50001:2018 Cl. 6.3)
          </label>

          <div className="col-span-2">
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2">
          <h2 className="font-bold text-black mb-2 mt-9 fs-5">
            10. Is any Consultant / Advisor used for implementation of System:
          </h2>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="yesOption"
                className="mr-1 cursor-pointer"
              />
              <label htmlFor="yesOption" className="text-black dark:text-white">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noOption"
                className="mr-1 cursor-pointer"
              />
              <label htmlFor="noOption" className="text-black dark:text-white">
                No
              </label>
            </div>
          </div>
          <label className="font-medium text-black dark:text-white mt-2 mb-3">
            If Yes, Name and contact details of the Management System Consultant
            / Advisor:
          </label>
        </div>
        <Table responsive="md" hover bordered className="">
          <tbody>
            <tr>
              <th className="align-middle" rowSpan={2} style={{ width: '30%' }}>
                Name of the Consultant
              </th>
              <th
                className="align-middle"
                rowSpan={2}
                style={{ width: '20%' }}
              ></th>
              <th style={{ width: '30%' }}>E-mail</th>
              <td></td>
            </tr>
            <tr>
              <th style={{ width: '30%' }}>Mobile</th>
              <td></td>
            </tr>
            <tr>
              <th className="align-middle" style={{ width: '30%' }}>
                Name of the Consultancy Firm
              </th>
              <th className="align-middle" style={{ width: '20%' }}></th>
              <th style={{ width: '30%' }}>Telephone No.</th>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <h2 className="font-bold text-black mb-2 mt-8 fs-5">
          11. Has any other Departments/Divisions (Inspection Services/Education
          & Training) of IRCLASS Systems and Solutions Private Limited (ISSPL)
          and Indian Register of Shipping (IRS) provided any services to your
          organisation? If Yes, please mention the Type of Services provided,
          last date of Service & Name of the person.
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="yesOption"
              className="mr-1 cursor-pointer"
            />
            <label htmlFor="yesOption" className="text-black dark:text-white">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="noOption"
              className="mr-1 cursor-pointer"
            />
            <label htmlFor="noOption" className="text-black dark:text-white">
              No
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-2 mt-2">
              If Yes,Type of the Service
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-2 mt-2">
              Name
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <div className="flex items-center gap-4 mb-2 mt-4">
            <h2 className="font-bold text-black mb-2 mt-8 fs-5">
              12. Expected Audit Date:
            </h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">
          13. Please Tick on the other Certification Scheme(s) Interested for:
        </h2>
        <Table responsive="md" hover bordered className="">
          <thead></thead>
          <tbody>
            <tr>
              <td className="p-2 text-center align-middle">ISO 9001 </td>

              <td className="p-2 text-center  align-middle">ISO 14001 </td>

              <td className="p-2 text-center  align-middle">ISO 45001 </td>

              <td className="p-2 text-center  align-middle">ISO 22000 </td>

              <td className="p-2 text-center  align-middle">ISO 27001 </td>

              <td className="p-2 text-center  align-middle">IATF 16949 </td>

              <td className="p-2 text-center  align-middle">ISO 28000 </td>

              <td className="p-2 text-center  align-middle">ISO 30000 </td>
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
            </tr>
          </tbody>
        </Table>{' '}
        <h3 className="text-dark mb-10">
          [The application is for integrated certification, please fill up
          Questionnaire for IMS certification also]
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name
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
              Email ID
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
              Position
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
              Contact No.
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
              Signature
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
              Date
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
      <div>
        <h2 className="font-bold text-black text-center mb-2 mt-19 fs-4 p-2">
          Annexure A - Applicable only for multiple sites (please fill
          separately for each site.)
        </h2>
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">1. Site Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mb-4">
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

          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Permanent/Temporary
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
              Activity/ Scope at this site
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
              Boundary
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>

        <Table bordered>
          <thead>
            <tr>
              <th rowSpan={2}>
                2. Manpower details shift wise (at above site address).
              </th>
              <th rowSpan={2}>No. of Shifts</th>
              <th colSpan="4" className="text-center">
                Shift-wise distribution
              </th>
              <th rowSpan={2}>Total</th>
            </tr>

            <tr>
              <th>Gen</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular employees</td>
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
                <Form.Control type="number" placeholder="Total" />
              </td>
            </tr>
            <tr>
              <td>Contract employees</td>
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
                <Form.Control type="number" placeholder="Total" />
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="text-right">
                Total No. of Employees
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <h2 className="font-bold text-black mb-2 mt-4 fs-8">
          {' '}
          Are the activities similar in all the shifts? If no, mention shift
          wise activities.
        </h2>
        <div className="p-2 border rounded-lg bg-white text-black mb-4">
          <input type="text" className="w-full bg-transparent cursor-text" />
        </div>

        <h2 className="font-bold text-black mb-2 mt-4 fs-8">
          {' '}
          Number of Personnel responsible for energy management, use and control
          from the total manpower.( including any part time employees and
          persons working on behalf of the organization i.e. contract
          employees).
          <br />
          <br />
          Note: When reviewing the categories in the table person(s) shall not
          be double counted
          <br />
          Example: In case a person is responsible for two or more activities,
          the person should be counted only once in the total number of persons
          who impact EnMS. e.g Energy team members may also be responsible for
          activities 3,4,5,6 in the table.
        </h2>
        <Table bordered>
          <thead>
            <tr>
              <th className="text-center align-middle">Sr. No.</th>
              <th className="text-center align-middle">
                Activity related to EnMS
              </th>
              <th className="text-center align-middle">No. of Persons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center align-middle">1</td>
              <td>Top Management (Team if applicable)</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">2</td>
              <td>Energy management team</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">3</td>
              <td>
                Persons responsible for major changes affecting energy
                performance (e.g., persons responsible for plant renovation,
                maintenance of energy-centric equipment, procurement of
                energy-centric equipment, etc.)
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">4</td>
              <td>
                Persons responsible for energy planning, identifying SEUs,
                developing, implementing objectives, targets, and action plans
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">5</td>
              <td>
                Person(s) responsible for design which affects energy
                performance
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">6</td>
              <td>
                Person(s) responsible for planning, operating, and maintaining
                the processes related to the SEUs including during seasonal
                operations (e.g., harvesting activities, hotels) as appropriate
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">7</td>
              <td>
                Person(s) responsible for procurement related to energy
                performance
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="text-center align-middle">8</td>
              <td>
                Person(s) responsible for developing and maintaining energy data
                and analysis
              </td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                Total number of persons who impact EnMS (sum of 1-8 above)
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name and Position of Authorised Personnel
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
              Signature
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
              Date
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
      <div className="text-center align-middle mt-4">
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

export default Application10;
