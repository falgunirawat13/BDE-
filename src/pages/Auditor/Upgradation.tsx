import { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';

const Upgradation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([
    {
      regNo: '001',
      auditorName: 'John Doe',
      requestFor: 'Upgrade',
      status: 'Pending',
      submittedDate: '2024-01-01',
      submittedBy: 'Admin',
      zone: 'North Zone',
      scheme: '',
    },
  ]);

  // Function to filter the table based on search query
  const filteredData = tableData.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === 'string' &&
        val.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData); // Update the state with filtered data
    }
  };

  return (
    <>
      {/* Heading with Button on the right */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="text-2xl font-bold text-black">
          Request for Auditor Upgradation/Enhancement
        </h1>
        {/* Button aligned on the right */}
        <Button
          className="bg-black text-white px-4 py-2 rounded-md shadow-md"
          type="button"
        >
          New Upgrade/Enhancement/Revision in Risk
        </Button>
      </div>

      {/* Search Bar */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Reg. No.
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Auditor Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Zone
              </th>{' '}
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
                Request For
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Status
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
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td className="p-3 align-middle text-center">
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td className="p-3 align-middle text-center">
                    <Button variant="outline-dark" size="sm">
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
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Upgradation;
