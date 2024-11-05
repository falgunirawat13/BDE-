import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface SubmittedData {
  applyFor: string;
  standard: string;
  zone: string;
  title: string;
  name: string;
  birthDate: string;
  isPartOfISSPL: string;
  isPartOfIRS: string;
  address: string;
  educationDetails: string;
  languages: string;
  expertise: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  nationality: string;
  contactNo: string;
  mobileNo: string;
  faxNo: string;
  emailID: string;
  qualificationCriteria: string;
  industry: string;
  documentType: string;
  uploadFile: string;
  naceCodeRev1: string;
  naceCodeRev2: string;
  efCodes: string;
  riskCategory: string;
  workExperienceYears: string;
  organizationName: string;
  organizationBusinessLine: string;
  tenure: string;
  rolesResponsibilities: string;
  yearsInConsultancy: string;
  consultancySector: string;
  numberOfClients: string;
  yearsInAuditing: string;
  auditedSector: string;
  numberOfMandays: string;
  numberOfTrainings: string;
  yearsInTraining: string;
  status: string;
}

const CodeComponent = () => {
  const { id } = useParams();
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isApproved, setIsApproved] = useState(false);

  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate('/validation');
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/auditor/auditors/${id}`,
      );

      console.log('API Response Data:', response.data);
      setSubmittedData(response.data.auditor);
      console.log('Sub', submittedData);
    } catch (error: any) {
      setError(error.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;
  if (!submittedData) return <p>No data available.</p>;

  const handleApproveClick = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:8000/api/auditor/status/${id}`,
        {
          status: 'Accept',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status !== 200) {
        throw new Error('Failed');
      }

      console.log('Update', response.data);

      // Update the approval state
      setIsApproved(true);
      setSubmittedData({ ...submittedData, status: 'Accept' }); // Optionally update submittedData
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Review And Approval Of Registration
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {/* Field: Apply For */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Application Received For
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.applyFor} />
          </div>
        </div>

        {/* Field: Name */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Auditor Name
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.name} />
          </div>
        </div>

        {/* Field: Zone */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Zone
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.zone} />
          </div>
        </div>

        {/* Field: Title */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Title
          </label>
          <div className="p-2 border rounded-lg bg-white text-black">
            <input type="text" value={submittedData.title} />
          </div>
        </div>

        {/* Field: Birth Date */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Birth Date
          </label>
          <div className="p-2 border rounded-lg bg-white text-black">
            <input type="date" value={submittedData.birthDate} />
          </div>
        </div>

        {/* Field: Nationality */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Nationality
          </label>
          <div className="p-2 border rounded-lg bg-white text-black">
            <input type="text" value={submittedData.nationality} />
          </div>
        </div>

        {/* Field: Contact No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Contact No
          </label>
          <div className="p-2 border rounded-lg bg-white text-black">
            <input type="text" value={submittedData.contactNo} />
          </div>
        </div>

        {/* Field: Mobile No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Mobile No
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.mobileNo} />
          </div>
        </div>

        {/* Field: Fax No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Fax No
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.faxNo} />
          </div>
        </div>

        {/* Field: Email ID */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Email ID
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.emailID} />
          </div>
        </div>
        {/* Field: Is part of ISSPL */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Is part of ISSPL?
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.isPartOfISSPL}
          </div>
        </div>

        {/* Field: Is part of IRS */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Is part of IRS?
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.isPartOfIRS}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Address
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.address} />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            City
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.city} />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            State
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.state} />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Country
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <input type="text" value={submittedData.country} />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4 mt-4">
        Work Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] gap-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in work experience:
            </div>
            <div>{submittedData.workExperienceYears || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Name of the Organization:
            </div>
            <div>{submittedData.organizationName || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Organization's line of business:
            </div>
            <div>{submittedData.organizationBusinessLine || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Tenure:</div>
            <div>{submittedData.tenure || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Role and Responsibiloties w.r.t. required competencies:
            </div>
            <div>{submittedData.rolesResponsibilities || 'N/A'}</div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Consultancy Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in consultancy:
            </div>
            <div>{submittedData.yearsInConsultancy || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Consultancy provided in sector:
            </div>
            <div>{submittedData.consultancySector || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Clients:</div>
            <div>{submittedData.numberOfClients || 'N/A'}</div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Auditing Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in auditing:
            </div>
            <div>{submittedData.yearsInAuditing || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Audited in sector:</div>
            <div>{submittedData.auditedSector || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Mandays:</div>
            <div>{submittedData.numberOfMandays || 'N/A'}</div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Training Experience:
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in training:
            </div>
            <div>{submittedData.yearsInTraining || 'N/A'}</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Trainings:</div>
            <div>{submittedData.numberOfTrainings || 'N/A'}</div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#2D3748] mb-4 mt-4">
        Likely NaceCode/Category Code Suggestion Panel
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {/* Field: Qualification Criteria */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Qualification Criteria
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <div className="w-full">
              {submittedData.qualificationCriteria ||
                'No qualification Criteria selected'}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Industry
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <div className="w-full">
              {submittedData.industry || 'No industry selected'}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Standard
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            <div className="w-full">
              {submittedData.standard || 'No standard selected'}
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#2D3748] mb-4 mt-4">
        Claimed NaceCodes
      </h3>
      <Table responsive="md" hover bordered className="table-striped">
        <thead className="thead-light">
          <tr>
            <th className="p-2">Standard</th>
            <th className="p-2">Criteria</th>
            <th className="p-2">NaceCodes(Rev1)</th>
            <th className="p-2">NaceCodes(Rev2)</th>
            <th className="p-2">Rejection Remarks</th>
            <th className="p-2">Approve</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="p-2">{submittedData.standard}</td>
            <td className="p-2"></td>
            <td className="p-2">{submittedData.naceCodeRev1}</td>
            <td className="p-2">{submittedData.naceCodeRev2}</td>
            {/* Rejection Remarks with text input */}
            <td className="p-2">
              <input
                type="text"
                placeholder="Enter remarks"
                className="form-control"
                name="rejectionRemarks1"
              />
            </td>
            {/* Approve with checkbox */}
            <td className="p-2 text-center">
              <input type="checkbox" name="approve1" />
            </td>
          </tr>
        </tbody>
      </Table>
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4 mt-4">
        Supported Documents
      </h3>
      <div className="bg-white shadow-md rounded-lg p-4 border border-[#2D3748] overflow-x-auto">
        <Table hover className="table-striped min-w-full">
          <thead className="bg-[#F7FAFC] text-[#1A202C]">
            <tr>
              <th className="py-2 px-4 whitespace-nowrap">File Type</th>
              <th className="py-3 px-4 whitespace-nowrap">File Name</th>
              <th className="py-2 px-4 whitespace-nowrap">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {' '}
              <td className="py-2 px-4">{submittedData.documentType}</td>
              <td className="py-2 px-4">{submittedData.uploadFile}</td>
              <td className="py-2 px-4">
                {/* View button, possibly link to file */}
                <Button
                  variant="link"
                  className="bg-dark text-white border rounded-md shadow-md"
                >
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
    
        <div className="flex flex-col">
          <label
            htmlFor="reviewalStatus"
            className="font-medium text-black dark:text-white mb-1"
          >
            Reviewal Status
          </label>
          <Form.Select
            aria-label="Select Reviewal Status"
            name="reviewalStatus"
            value={reviewalStatus}
            onChange={(e) => setReviewalStatus(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Rejected">Rejected</option>
          </Form.Select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="reviewedBy"
            className="font-medium text-black dark:text-white mb-1"
          >
            Reviewed By
          </label>
          <Form.Select
            aria-label="Select Reviewed By"
            name="reviewedBy"
            value={reviewedBy}
            onChange={(e) => setReviewedBy(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Reviewer1">Reviewer 1</option>
            <option value="Reviewer2">Reviewer 2</option>
          </Form.Select>
        </div>
      </div>

      <div className="flex flex-col mb-4 mt-4">
        <label
          htmlFor="reviewerRemarks"
          className="font-medium text-black dark:text-white mb-1"
        >
          Reviewer Remarks
        </label>
        <textarea
          name="reviewerRemarks"
          className="border border-gray-300 p-2 rounded-md"
          rows="2"
          placeholder="Remarks "
        ></textarea>
      </div> */}

      <div className="flex justify-end space-x-3 p-4">
        {isApproved || submittedData.status === 'Accept' ? (
          <Button
            className="bg-black text-white px-6 py-2 rounded-md shadow-md"
            type="button"
          >
            Approved
          </Button>
        ) : (
          <>
            <Button
              className="bg-black text-white px-6 py-2 rounded-md shadow-md"
              type="button"
              onClick={handleApproveClick}
            >
              Approve
            </Button>
            <Button
              className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
              type="button"
              onClick={handleCloseClick}
            >
              Reject
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CodeComponent;
