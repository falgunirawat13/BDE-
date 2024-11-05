import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const ApplicationForm134 = () => {
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
          Application Form MDQMS (ISO 13485) Scheme
        </h2>
      </div>
      <div>
        {/* Section 1 */}
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">Section 1</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3 mb-1">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name of the Organization*
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
              Scope of the Certification*
            </label>
            <div className="p-2 border rounded-lg bg-white text-black">
              <input
                type="text"
                className="w-full bg-transparent cursor-text"
              />
            </div>
          </div>
        </div>
        <p className="font-medium text-black dark:text-white mb-4">
          *As to appear in Certificate
        </p>
        {/* Section 2 */}
        <h2 className="font-bold text-black mb-3 mt-10 fs-5">Section 2</h2>
        <Table responsive="md" bordered>
          <thead>
            <tr>
              <th className="ptext-left align-middle" colSpan="4">
                Certification Scheme/s: (Please tick the relevant requirement)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" align-middle" style={{ width: '25%' }}>
                ISO 9001:2015
              </td>
              <td className="align-middle text-center">
                <Form.Control type="text" placeholder="Enter name" />
              </td>
              <td className="align-middle" style={{ width: '25%' }}>
                ISO 13485:2016*
              </td>
              <td className="align-middle text-center">
                <Form.Control type="text" placeholder="Enter name" />
              </td>
            </tr>
            <tr>
              <td className=" align-middle" style={{ width: '25%' }}>
                Any Other, specify:*
              </td>
              <td className="align-middle text-center" colSpan={3}>
                <Form.Control
                  type="text"
                  placeholder="(e.g. ISO 14001:2015, ISO 45001:2018; ISO 21001:2018, etc.)
"
                />
              </td>
            </tr>
            <tr>
              <th className="align-middle" style={{ width: '25%' }}>
                Accreditations Required:*
              </th>
              <td className=" align-middle text-center" colSpan={3}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '50px',
                  }}
                >
                  <label>
                    NABCB
                    <Form.Check
                      inline
                      type="checkbox"
                      id="checkbox1"
                      style={{ marginLeft: '12px' }}
                    />
                  </label>

                  <label>
                    Un Accredited
                    <Form.Check
                      inline
                      type="checkbox"
                      id="checkbox2"
                      style={{ marginLeft: '12px' }}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* Section 3 */}
        <h2 className="font-bold text-black mb-3 mt-10 fs-5">Section 3</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead className="bg-light">
            <tr>
              <th className="p-2 text-center align-middle">
                Details of Key Personnel
              </th>
              <th className="p-2 text-center align-middle">Name</th>
              <th className="p-2 text-center align-middle">Designation</th>
              <th className="p-2 text-center align-middle">E-mail ID</th>
              <th className="p-2 text-center align-middle">Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-2 align-middle">Top Management</th>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter name" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter designation" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="email" placeholder="Enter email" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter mobile number" />
              </td>
            </tr>
            <tr>
              <th className="p-2 align-middle">Authorized Representative</th>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter name" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter designation" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="email" placeholder="Enter email" />
              </td>
              <td className="p-2 align-middle text-center">
                <Form.Control type="text" placeholder="Enter mobile number" />
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 4 */}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 4</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead>
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '35%' }}
              >
                Location Title and Address*{' '}
                <p className="text-sm text-muted">
                  (Please mention auditable locations) <br />
                  (Location Title, e.g. Main office / Corporate Office /
                  Registered Office / Branch Office / Works / Unit / Site, etc.)
                </p>
              </th>
              <th
                className="p-2 text-center align-middle"
                style={{ width: '30%' }}
              >
                Contact Details
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '35%' }}
              >
                Activities Carried Out*
                <p className="text-sm text-muted">
                  (e.g. Management, Human Resource, Marketing, Sales, Purchase,
                  Design, Development, Production, Engineering, Delivery,
                  Testing, Implementation, Maintenance, Service Provision,
                  Quality Control, Stores, Despatch)
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter location address"
                />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter contact details" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter activities carried out"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter location address"
                />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter contact details" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter activities carried out"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-left">
                *As to appear in Certificate. <br /> Please insert/attach
                similar tables in case of more locations.
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 5 */}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 5</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left align-middle" colSpan="4">
                List of Devices covered under the applied Scope of
                Certification:
              </th>
            </tr>

            <tr>
              <th
                className="p-2 text-center align-middle"
                style={{ width: '5%' }}
              >
                Sr. No.
              </th>
              <th className="p-2 text-center align-middle">
                Name of the Device
              </th>
              <th className="p-2 text-center align-middle">Description</th>
              <th className="p-2 text-center align-middle">Intended Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center align-middle">1</td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter device name" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter description" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter intended use" />
              </td>
            </tr>
            <tr>
              <td className="text-center align-middle">2</td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter device name" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter description" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter intended use" />
              </td>
            </tr>
            <tr>
              <td className="text-center align-middle">3</td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter device name" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter description" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter intended use" />
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 6 */}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 6</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead></thead>
          <tbody>
            <tr>
              <th className="p-2 align-middle" style={{ width: '30%' }}>
                Design Responsibility:
              </th>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter responsibility" />
              </td>
            </tr>
            <tr>
              <th className="p-2 align-middle">
                Do you provide installation services:
              </th>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Yes/No" />
              </td>
            </tr>
            <tr>
              <th className="p-2 align-middle">Used Sterilization Methods:</th>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter sterilization methods"
                />
              </td>
            </tr>
            <tr>
              <th className="p-2 align-middle">
                Type of Product Testing requirements (if applicable):
              </th>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter product testing requirements"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 7*/}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 7</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left align-middle" colSpan="3">
                # Details of Outsourced Processes: (such as Design / Production
                processes / Services / Testing / Calibration etc.) :
              </th>
            </tr>
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '35%' }}
              >
                Process
              </th>
              <th
                className="p-2 text-center align-middle"
                style={{ width: '30%' }}
              >
                Supplier / Sub-contractor
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '35%' }}
              >
                Compliance Status or Control exercised
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter location address"
                />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter contact details" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter activities carried out"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter location address"
                />
              </td>
              <td className="p-2 align-middle">
                <Form.Control type="text" placeholder="Enter contact details" />
              </td>
              <td className="p-2 align-middle">
                <Form.Control
                  type="text"
                  placeholder="Enter activities carried out"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 8 */}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 8</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left align-middle" colSpan="4">
                # Details of major Technical processes:
                <br />
                <p className="text-sm text-muted">
                  (e.g. Casting, Forging, Extrusion, Molding, Machining,
                  Fabrication, Pressing, Assembly, etc. in Manufacturing sector)
                  <br />
                  (e.g. Stocking, Distribution, Data processing, Programming,
                  Teaching, Radiography, Surgery etc. in Service sector)
                  <br />
                  (e.g. Risk Management, Change Management, Incident Management,
                  Infrastructure Migration, Engineering and Development, Change
                  Implementation, etc in IT Sector)
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <Form.Control
                  type="text"
                  placeholder="Enter data here"
                  className="w-full p-2 border "
                />
              </td>
            </tr>
          </tbody>
        </Table>
        {/*Section 9 */}{' '}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 9</h2>
        <Table responsive="md" hover bordered className="mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left align-middle" colSpan="4">
                # Details of statutory & regulatory aspects applicable to your
                product / services / processes:
                <span className="text-sm text-muted">
                  (Please provide copy){' '}
                </span>
                <br />
                <p className="text-sm text-muted">
                  (e.g. Licenses / Permissions / Certifications / Affiliations /
                  Memberships etc.):
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {' '}
              <th className="p-2 align-middle" style={{ width: '25%' }}>
                Status of CDSCO Manufacturing License: -
              </th>
            </tr>
            <tr>
              {' '}
              <th className="p-2 align-middle" style={{ width: '25%' }}>
                GST No.-{' '}
              </th>
            </tr>
            <tr>
              {' '}
              <th className="p-2 align-middle" style={{ width: '25%' }}>
                CIN No.-{' '}
              </th>
            </tr>
            <tr>
              {' '}
              <th className="p-2 align-middle" style={{ width: '25%' }}>
                Any Other Specify: -{' '}
              </th>
            </tr>
          </tbody>
        </Table>
        {/* Section 10 */}
        <h2 className="font-bold text-black mb-3 mt-13 fs-5">Section 10</h2>
        <Table responsive="md" hover bordered className="table-striped mt-4">
          <thead>
            <tr>
              <th className="p-2 text-left align-middle" colSpan="15">
                Is the organization working in multiple shifts?
                ________________________ (If yes, please fill up the below
                table)
                <br />
              </th>
            </tr>
            <tr>
              <th className="p-2 text-center align-middle" colSpan="3">
                Shift Timings
                <br />
              </th>
              <th className="p-2 text-center align-middle" colSpan="3">
                General
                <br />
                __ to __
              </th>
              <th className="p-2 text-center align-middle" colSpan="3">
                1st Shift
                <br />
                __ to __
              </th>
              <th className="p-2 text-center align-middle" colSpan="3">
                2nd Shift
                <br />
                __ to __
              </th>
              <th className="p-2 text-center align-middle" colSpan="3">
                3rd Shift
                <br />
                __ to __
              </th>
            </tr>
            <tr>
              <th rowSpan="2" className="p-2 text-center align-middle">
                Sites Name
              </th>
              <th rowSpan="2" className="p-2 text-center">
                Department / Activity
                <br />
                <p className="text-sm text-muted">
                  (e.g. Management, Human Resource, Marketing, Sales, Purchase,
                  Design, Development, Production, Quality Control, Stores,
                  Despatch, Testing, Implementation, Maintenance, Service
                  Provision, etc.)
                </p>
              </th>
              <th rowSpan="2" className="p-2 text-center align-middle">
                No. of shifts
              </th>
              <th colSpan="4" className="p-2 text-center align-middle">
                Full time Emp.
              </th>
              <th colSpan="4" className="p-2 text-center align-middle">
                Part time Emp.
              </th>
              <th colSpan="4" className="p-2 text-center align-middle">
                Contract Emp.
              </th>
            </tr>

            <tr>
              {/* Sub-headers for General, Shift 1, 2, 3 */}
              <th className="p-2 text-center align-middle">General</th>
              <th className="p-2 text-center align-middle">Shift 1</th>
              <th className="p-2 text-center align-middle">Shift 2</th>
              <th className="p-2 text-center align-middle">Shift 3</th>

              <th className="p-2 text-center align-middle">General</th>
              <th className="p-2 text-center align-middle">Shift 1</th>
              <th className="p-2 text-center align-middle">Shift 2</th>
              <th className="p-2 text-center align-middle">Shift 3</th>

              <th className="p-2 text-center align-middle">General 1</th>
              <th className="p-2 text-center align-middle">Shift 1</th>
              <th className="p-2 text-center align-middle">Shift 2</th>
              <th className="p-2 text-center align-middle">Shift 3</th>
            </tr>
          </thead>

          <tbody>
            {/* Row for Input Fields */}
            <tr>
              {/* Sites Name */}
              <td>
                <Form.Control type="text" placeholder="Enter site name" />
              </td>

              {/* Department / Activity */}
              <td>
                <Form.Control
                  type="text"
                  placeholder="Enter department/activity"
                />
              </td>

              {/* No. of shifts */}
              <td>
                <Form.Control type="number" placeholder="No. of shifts" />
              </td>

              {/* Full Time Shifts Inputs */}
              <td>
                <Form.Control type="number" placeholder="Full time - General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Full time - Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Full time - Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Full time - Shift 3" />
              </td>

              {/* Part Time Shifts Inputs */}
              <td>
                <Form.Control type="number" placeholder="Part time - General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Part time - Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Part time - Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Part time - Shift 3" />
              </td>

              {/* Contract Shifts Inputs */}
              <td>
                <Form.Control type="number" placeholder="Contract - General" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Contract - Shift 1" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Contract - Shift 2" />
              </td>
              <td>
                <Form.Control type="number" placeholder="Contract - Shift 3" />
              </td>
            </tr>

            {/* Footer Notes */}
            <tr>
              <td colSpan="15" className="p-2 text-left align-middle">
                *Please specify the location and department wise man-power in
                front of the processes.
                <br /> In-case of additional information of locations use
                additional sheet identical to above table.
              </td>
            </tr>
          </tbody>
        </Table>
        {/* Section 11 */}
        <h2 className="font-bold text-black mb-4 mt-13 fs-5">Section 11</h2>
       
        <Table responsive="md" hover bordered className="table-striped">
          <thead>
            <tr>
              <th className="p-2 text-center">Sr. No.</th>
              <th className="p-2">Particulars</th>
              <th className="p-2 ">Please provide the details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-center" style={{ width: '5%' }}>
                a)
              </td>
              <td className="text-left align-middle" style={{ width: '40%' }}>
                When (Month-Year) do you expect the Audit and Certification to
                take place?
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Enter expected date" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">b)</td>
              <td className="text-left align-middle">
                Is Design applicable to the scope of certification?
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Enter details" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">c)</td>
              <td className="text-left align-middle">
                Do you have a consultant? If yes, please specify name.
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Consultant name" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">d)</td>
              <td className="text-left align-middle">
                Which day is weekly off for your organization?
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Enter weekly off day" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">e)</td>
              <td className="p-2 text-left align-middle">
                What are your working hours? (Timing hh:mm to hh:mm)
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Enter working hours" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">f)</td>
              <td className="p-2 text-left align-middle">
                Language to be used during conduct of audit.
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control type="text" placeholder="Enter language" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">g)</td>
              <td className="p-2 text-left align-middle">
                Is your organization already an applicant/certified for the
                certification scheme you have applied for and you want to change
                your present certification service provider?
                <br />
                (If yes, please mention the name of certification body and
                attach a copy of the certificate along with the last audit/NC
                report). In addition, answer the following questions:
              </td>
              <td className="text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left align-middle">
                (i) Any Complaints received and action taken (major complaints):
              </td>
              <td className="text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left align-middle">
                (ii) Any current engagement by the organization with regulatory
                bodies in respect of legal compliance:
              </td>
              <td className="text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">h)</td>
              <td className="p-2 text-left align-middle">
                In case of transfer of certifying body, please mention the
                reasons for seeking the transfer.
                <br />
                Note: In case of Transfer Annexure 2 is to be filled (Form
                attached separately).
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide reasons" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">i)</td>
              <td className="p-2 text-left align-middle">
                Are you already certified by IRQS for the applied Standard? If
                yes, under which Accreditation
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">j)</td>
              <td className="p-2 text-left align-middle">
                Compliance to conduct of minimum one round of Internal Audit and
                Management Review
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center">k)</td>
              <td className="p-2 text-left align-middle">
                Compliance to complete cycle of product manufacturing i.e.,
                batch manufacturing for applied scope) / cycle of development or
                Service providing (SDLC)
              </td>
              <td className="p-2 text-left align-middle">
                <Form.Control as="textarea" placeholder="Provide details" />
              </td>
            </tr>
          </tbody>
        </Table>
        {/* Section 12 */}
        <h2 className="font-bold text-black mb-2 mt-4 fs-5">Section 12</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-3 mb-1">
          <div className="flex flex-col">
            <label className="font-medium text-black dark:text-white mb-1">
              Name of the Applicants authorized representative:
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
              Designation:
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

export default ApplicationForm134;
