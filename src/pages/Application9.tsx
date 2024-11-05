import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const Application9 = () => {
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
          Application Form ISO 28000 (SCSMS/SRSMS)
        </h2>
        <h4 className="font-bold text-black mt-4 mb-4 fs-8">
          PLEASE COMPLETE IN CAPITALS
        </h4>
      </div>
      <div>
        {/* Section 1 and 2 */}
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">
          01. Company Name and Contact Details
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
              Authorized Representative
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
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <h2 className="font-bold text-black mb-2 mt-4 fs-5">
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
        {/*Section 3*/}
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          {/* Scope of Certification */}
          <div className="flex items-center mb-2">
            <h2 className="font-bold text-black mb-4 mt-4 fs-5">
              03. Scope of Certification:
            </h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1 ml-12"
            />
          </div>
          <p className="font-medium text-black mb-2">
            In case of multi site certification:
            <br />
            Kindly mention scope of activities site wise (to be filled if
            different activities are carried out in different sites:
          </p>
          <div className="flex items-center mb-2">
            <h2 className="font-bold text-black mb-2 mt-4 fs-8">Site 1:</h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1 ml-12"
            />
          </div>
          <div className="flex items-center mb-2">
            <h2 className="font-bold text-black mb-2 mt-4 fs-8">Site 2:</h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1 ml-12"
            />
          </div>
          <div className="flex items-center mb-2">
            <h2 className="font-bold text-black mb-2 mt-4 fs-8">Site 3:</h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1 ml-12"
            />
          </div>
        </div>
        {/*Section 4*/}
        <h2 className="font-bold text-black mb-4 mt-6 fs-5">
          04. Please put tick on the Type of Certification & Accreditation:
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
            ANAB Accreditation required?
          </label>

          <div className="flex items-center space-x-4 col-span-2">
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
            Certification required for
            <br />
            Note : ISO 28000:2007 valid till 31st March 2025
          </label>
          <div className="flex items-center space-x-4 col-span-2">
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
                ISO 28000 : 2007
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
                ISO 28000 :2022
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
        <div className="p-2 border rounded-lg bg-white text-black mb-4">
          <input type="text" className="w-full bg-transparent cursor-text" />
        </div>
        <p className="font-medium text-black dark:text-white mb-1">
          Note: In case of Transfer Annexure 2 is to be filled (Form attached
          separately)
        </p>
        {/*section 5*/}
        <h2 className="font-bold text-black mb-2 mt-8 fs-5">
          05. Details of operations in the main unit / Head office
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mb-4">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Product at this site / involved in supply chain
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
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
            <label className="font-medium text-black dark:text-white mb-3">
              Approvals / Statutory & Regulatory requirements
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
              List of Dept. associated with supply chain
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
              Outsourced Processes, if any
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        {/*section 6*/}
        <h2 className="font-bold text-black mb-4 mt-4 fs-5">
          06. Details of Sites
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
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          07. Related Information
        </h2>
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4">
          <label className="font-medium text-black dark:text-white mb-2">
            Indicate whether compliant with other SCSMS requirements E.g. CTPAT
            (US), AEO (Europe), etc.
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
          <label className="font-medium text-black dark:text-white mb-2 mt-2">
            If 'Yes' , Please list out :
          </label>
          <input
            type="text"
            placeholder="Holding Company Name"
            className="p-2 mt-1 border rounded-lg bg-white text-black cursor-text"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 mb-4">
          <div className="grid grid-cols-3 col-span-3 items-center">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8 col-span-1">
              Potential security threats
            </h2>
            <div className="col-span-2">
              <input
                type="text"
                className="p-2 border rounded-lg bg-white text-black cursor-text w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 col-span-3 items-center">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8 col-span-1">
              Types of products/services that could be targeted:
            </h2>
            <div className="col-span-2">
              <input
                type="text"
                className="p-2 border rounded-lg bg-white text-black cursor-text w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <label className="font-medium text-black dark:text-white col-span-2">
            Likelihood of products/services that could be targeted
            <br /> (Please tick)
          </label>
          <div className="flex items-center space-x-25 col-span-2">
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
                High
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
                Medium
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
                Low
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 mb-4">
          <div className="grid grid-cols-3 col-span-3 items-center">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8 col-span-1">
              Geographical Locations
            </h2>
            <div className="col-span-2">
              <input
                type="text"
                className="p-2 border rounded-lg bg-white text-black cursor-text w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <label className="font-medium text-black dark:text-white col-span-2">
            Watersides
          </label>

          <div className="flex items-center space-x-25 col-span-2">
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
                id="yesOption"
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 mb-4">
          <div className="grid grid-cols-3 col-span-3 items-center">
            <h2 className="font-bold text-black mb-2 mt-2 fs-8 col-span-1">
              Other aspects which could affect security (Please specify):
            </h2>
            <div className="col-span-2">
              <input
                type="text"
                className="p-2 border rounded-lg bg-white text-black cursor-text w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <label className="font-medium text-black dark:text-white col-span-2">
            Likelihood and history of civil disturbance
          </label>

          <div className="flex items-center space-x-25 col-span-2">
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
                High
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
                Medium
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
                Low
              </label>
            </div>
          </div>

          <label className="font-medium text-black dark:text-white col-span-2">
            History and trends of security incidents
          </label>
          <div className="flex items-center space-x-25 col-span-2">
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
                High
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
                Medium
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
                Low
              </label>
            </div>
          </div>
        </div>
        {/*section 8 */}
        <h2 className="font-bold text-black mb-4 mt-13 fs-5">
          08. Is any Consultant / Advisor used for implementation of System :
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
        <div className="flex flex-col col-span-1 lg:col-span-2">
          <h2 className="font-bold text-black mb-2 mt-2 fs-8">
            If Yes, Name and contact details of the Management System Consultant
            / Advisor:
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-3">
              Name of the Consultant
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
              E-mail
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
              Name of the Consultancy Firm
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
              Mobile
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
              Telephone No.
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        {/*section 9 */}
        <h2 className="font-bold text-black mb-4 mt-10 fs-5">
          09. Has any other Departments/Divisions (Inspection Services/Education
          & Training) of IRCLASS Systems and Solutions Private Limited (ISSPL)
          and Indian Register of Shipping (IRS) provided any services to your
          organisation? <br />
          If Yes, please mention the Type of Services provided, last date of
          Service & Name of the Surveyor:
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
        {/*section 10*/}
        <div className="flex flex-col col-span-1 lg:col-span-2 mb-4 mt-4">
          <div className="flex items-center gap-4 mb-2 mt-2">
            <h2 className="font-bold text-black mb-2 mt-2 fs-5">
              10. Expected Audit Date:
            </h2>
            <input
              type="text"
              className="p-2 border rounded-lg bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name of Authorised Personnel and Position held
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
              Signature and Date
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
          2nd Floor, New Building, 52 A, Adi Shankaracharya Marg, , Powai,
          Mumbai - 400 072. <br />
          Tel. No. :+912230519800 Fax No.: + 91 22 2570 3611,
          E-mail:irqs@irclass.org Website: www.irqs.co.in
        </p>
      </div>
    </>
  );
};

export default Application9;
