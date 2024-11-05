import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Validation = () => {
  const navigate = useNavigate();

  // State for storing the fetched table data
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(tableData);

  // Fetch the submitted data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:8000/api/auditor/auditors',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        // Map the data from the API to match the tableData format
        const formattedData = data.auditors.map((auditor) => ({
          name: auditor.name,
          id: auditor.id,
          appliedFor: auditor.applyFor || 'N/A',
          scheme: auditor.standard || 'N/A',
          zone: auditor.zone || 'N/A',
          submittedDate: '2024-10-08', // If you have a submission date, use that here
          submittedBy: 'Admin', // Adjust based on API if there's a submittedBy field
          supportDocStatus:
            auditor.documents && auditor.documents.length > 0
              ? 'Approved'
              : 'Pending',
          supportDocRemarks: '',
          signDocStatus: '',
          signDocRemarks: '',
        }));

        setTableData(formattedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle input change for the common search bar
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleViewClick = (id) => navigate(`/view/${id}`);

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };

  // Filter table data based on search term
  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Review And Approval of Empanelment (Accreditation Head)
      </h1>

      {/* Common search bar */}
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search all columns..."
          className="form-control"
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th className="p-3 text-center align-middle">Name</th>
              <th className="p-3 text-center align-middle">Applied For</th>
              <th className="p-3 text-center align-middle">Scheme</th>
              <th className="p-3 text-center align-middle">Zone</th>
              <th className="p-3 text-center align-middle">Submitted Date</th>
              <th className="p-3 text-center align-middle">Submitted By</th>
              <th className="p-3 text-center align-middle">
                Support Document Status
              </th>
              <th className="p-3 text-center align-middle">
                Support Document Remarks
              </th>
              <th className="p-3 text-center align-middle">
                Sign Document Status
              </th>
              <th className="p-3 text-center align-middle">
                Sign Document Remarks
              </th>
              <th className="p-3 text-center align-middle">View/Edit</th>
              <th className="p-3 text-center align-middle">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="p-3 align-middle text-center">{row.name}</td>
                <td className="p-3 align-middle text-center">
                  {row.appliedFor}
                </td>
                <td className="p-3 align-middle text-center">{row.scheme}</td>
                <td className="p-3 align-middle text-center">{row.zone}</td>
                <td className="p-3 align-middle text-center">
                  {row.submittedDate}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.submittedBy}
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
                <td className="p-3 align-middle text-center">
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleViewClick(row.id)}
                  >
                    <MdOutlineEdit />
                  </Button>
                </td>
                <td className="p-3 align-middle text-center">
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

export default Validation;
