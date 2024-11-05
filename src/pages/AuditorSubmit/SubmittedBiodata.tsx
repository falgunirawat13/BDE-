import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SubmittedData = () => {
  interface SubmittedData {
    applyFor: '';
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
    languagesProficiency: string;
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
    documents: { documentType: string; uploadFile: string }[];
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
  }

  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'http://localhost:8000/api/auditor/auditors',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Response Data:', data);
        setSubmittedData(data.auditors[2]);
        console.log(submittedData);
      } catch (error: any) {
        setError(error.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;
  if (!submittedData) return <p>No data available.</p>;

  return (
    <>
      <h2 className="text-4xl font-semibold text-[#1A202C] mb-6">
        Biodata Information View
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg p-4 border border-[#2D3748]">
          <h3 className="text-2xl font-semibold text-[#2D3748] mb-2">
            Basic Information
          </h3>
          <hr className="mb-4 font-bold border border-black" />
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-[#1A202C] md:grid-cols-2">
            <div className="flex flex-col">
              <div className="font-bold text-black">Apply For:</div>
              <div>{submittedData.applyFor || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Standard:</div>
              <div>{submittedData.standard || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Zone:</div>
              <div>{submittedData.zone || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Title:</div>
              <div>{submittedData.title || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Name:</div>
              <div>{submittedData.name || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Birth Date:</div>
              <div>{submittedData.birthDate || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Is part of ISSPL?</div>
              <div>{submittedData.isPartOfISSPL || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Is part of IRS?</div>
              <div>{submittedData.isPartOfIRS || 'N/A'}</div>
            </div>
            <div className="flex-flex-col">
              <div className="font-bold text-black">Language:</div>
              <div>{submittedData.languages || 'N/A'}</div>
            </div>
            <div className="flex-flex-col">
              <div className="font-bold text-black">Language Proficiency:</div>
              <div>{submittedData.languagesProficiency || 'N/A'}</div>
            </div>
            <div className="flex-flex-col">
              <div className="font-bold text-black">Expertise:</div>
              <div>{submittedData.expertise || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-[#2D3748]">
          <h3 className="text-2xl font-semibold text-[#2D3748] mb-2">
            Contact Information
          </h3>
          <hr className="mb-4 font-bold border border-black" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
            <div className="flex flex-col">
              <div className="font-bold text-black">Address:</div>
              <div>{submittedData.address || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">City:</div>
              <div>{submittedData.city || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">State:</div>
              <div>{submittedData.state || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">PinCode:</div>
              <div>{submittedData.pinCode || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Country:</div>
              <div>{submittedData.country || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Nationality:</div>
              <div>{submittedData.nationality || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Contact No.:</div>
              <div>{submittedData.contactNo || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Mobile No.:</div>
              <div>{submittedData.mobileNo || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Fax No.:</div>
              <div>{submittedData.faxNo || 'N/A'}</div>
            </div>

            <div className="flex flex-col">
              <div className="font-bold text-black">Email ID:</div>
              <div>{submittedData.emailID || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
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

      {/* Supported Documents */}
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Uploaded Documents
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

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4 mt-5">
        Claimed NaceCodes and EAF/IAC Codes
      </h3>
      <div className="bg-white shadow-md rounded-lg p-4 border border-[#2D3748] overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">NaceCode (Rev1):</div>
            <div>{submittedData.naceCodeRev1 || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">NaceCode (Rev 2):</div>
            <div>{submittedData.naceCodeRev2 || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">IAF/EA Codes:</div>
            <div>{submittedData.efCodes || 'N/A'}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold   xt-black">Risk Category:</div>
            <div>{submittedData.riskCategory || 'N/A'}</div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      {/* <div className="flex flex-row justify-end items-end mt-6 space-x-4">
        <Button
          variant="primary"
          className="bg-[#152238] px-6 py-2 rounded-lg text-white"
        >
          Submit
        </Button>
      </div> */}
    </>
  );
};

export default SubmittedData;
