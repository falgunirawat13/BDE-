import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Validation2 = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([
    {
      name: 'John Doe',
      appliedFor: 'Developer',
      scheme: 'Scheme A',
      zone: 'North Zone',
      submittedDate: '2024-10-08',
      submittedBy: 'Admin',
      evaluatorName: 'Evaluator 1', // Added evaluatorName
      supportDocStatus: 'Approved',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
      evaluatorConclusion: '',
    },
    {
      name: 'Jane Smith',
      appliedFor: 'Designer',
      scheme: 'Scheme B',
      zone: 'South Zone',
      submittedDate: '2024-10-07',
      submittedBy: 'Manager',
      evaluatorName: 'Evaluator 2', // Added evaluatorName
      supportDocStatus: 'Pending',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
      evaluatorConclusion: 'Good',
    },
    // Add more rows as needed
  ]);

  const [searchInputs, setSearchInputs] = useState({
    name: '',
    appliedFor: '',
    scheme: '',
    zone: '',
    submittedDate: '',
    submittedBy: '',
    evaluatorName: '', // Ensure evaluatorName is included here
    evaluatorConclusion: '',
    supportDocStatus: '',
    supportDocRemarks: '',
    signDocStatus: '',
    signDocRemarks: '',
  });

  // Navigate to the View component/page on View click
  const handleViewClick = (index) => {
    navigate(`/view/${index}`); // Navigate to the view page with the row index
  };

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };

  // Filtering logic based on search inputs
  const filteredData = tableData.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchInputs.name.toLowerCase()) &&
      row.appliedFor
        .toLowerCase()
        .includes(searchInputs.appliedFor.toLowerCase()) &&
      row.scheme.toLowerCase().includes(searchInputs.scheme.toLowerCase()) &&
      row.zone.toLowerCase().includes(searchInputs.zone.toLowerCase()) &&
      row.submittedDate.includes(searchInputs.submittedDate) &&
      row.submittedBy
        .toLowerCase()
        .includes(searchInputs.submittedBy.toLowerCase()) &&
      row.evaluatorName // Include evaluatorName in filtering
        .toLowerCase()
        .includes(searchInputs.evaluatorName.toLowerCase()) &&
      row.evaluatorConclusion
        .toLowerCase()
        .includes(searchInputs.evaluatorConclusion.toLowerCase()) &&
      row.supportDocStatus
        .toLowerCase()
        .includes(searchInputs.supportDocStatus.toLowerCase()) &&
      row.supportDocRemarks
        .toLowerCase()
        .includes(searchInputs.supportDocRemarks.toLowerCase()) &&
      row.signDocStatus
        .toLowerCase()
        .includes(searchInputs.signDocStatus.toLowerCase()) &&
      row.signDocRemarks
        .toLowerCase()
        .includes(searchInputs.signDocRemarks.toLowerCase())
    );
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Review And Approval of Empanelment (Accreditation Controller Panel)
      </h1>
      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Applied For
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Scheme
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Zone
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Submitted Date
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Submitted By
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Evaluator Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Evaluator Conclusion
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Support Doc Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Support Doc Remarks
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Sign Doc Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Sign Doc Remarks
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '80px' }}
              >
                View/Edit
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '80px' }}
              >
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Search Row */}
            <tr>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="name"
                  value={searchInputs.name}
                  onChange={handleSearchChange}
                  placeholder="Search Name"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="appliedFor"
                  value={searchInputs.appliedFor}
                  onChange={handleSearchChange}
                  placeholder="Search Applied For"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="scheme"
                  value={searchInputs.scheme}
                  onChange={handleSearchChange}
                  placeholder="Search Scheme"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="zone"
                  value={searchInputs.zone}
                  onChange={handleSearchChange}
                  placeholder="Search Zone"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="submittedDate"
                  value={searchInputs.submittedDate}
                  onChange={handleSearchChange}
                  placeholder="Search Date"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="submittedBy"
                  value={searchInputs.submittedBy}
                  onChange={handleSearchChange}
                  placeholder="Search Submitted By"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="evaluatorName" // Update to use evaluatorName
                  value={searchInputs.evaluatorName}
                  onChange={handleSearchChange}
                  placeholder="Search Evaluator Name"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="evaluatorConclusion"
                  value={searchInputs.evaluatorConclusion}
                  onChange={handleSearchChange}
                  placeholder="Search Evaluator Conclusion"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="supportDocStatus"
                  value={searchInputs.supportDocStatus}
                  onChange={handleSearchChange}
                  placeholder="Search Support Doc Status"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="supportDocRemarks"
                  value={searchInputs.supportDocRemarks}
                  onChange={handleSearchChange}
                  placeholder="Search Support Doc Remarks"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="signDocStatus"
                  value={searchInputs.signDocStatus}
                  onChange={handleSearchChange}
                  placeholder="Search Sign Doc Status"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center">
                <input
                  type="text"
                  name="signDocRemarks"
                  value={searchInputs.signDocRemarks}
                  onChange={handleSearchChange}
                  placeholder="Search Sign Doc Remarks"
                  className="form-control"
                />
              </td>
              <td className="p-3 align-middle text-center"></td>
              <td className="p-3 align-middle text-center"></td>
            </tr>

            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="p-3 align-middle text-center">{row.name}</td>
                <td className="p-3 align-middle text-center">
                  {row.appliedFor}
                </td>
                <td className="p-3 align-middle text-center">{row.scheme}</td>
                <td className="p-3 align-middle text-center">{row.zone}</td>
                <td className="p-2 align-middle " style={{ width: '150px' }}>
                  {row.submittedDate}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.submittedBy}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.evaluatorName}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.evaluatorConclusion}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.supportDocStatus}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.supportDocRemarks}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.signDocStatus}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.signDocRemarks}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '80px' }}
                >
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleViewClick(index)}
                  >
                    <MdOutlineEdit />
                  </Button>
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '80px' }}
                >
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Validation2;
