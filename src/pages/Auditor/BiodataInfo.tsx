import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import SubmittedData from '../AuditorSubmit/SubmittedBiodata';

const BiodataInfo = () => {
  const [formData, setFormData] = useState({
    applyFor: '',
    standard: '',
    zone: '',
    title: '',
    name: '',
    birthDate: '',
    isPartOfISSPL: '',
    isPartOfIRS: '',
    address: '',
    educationDetails: '',
    languages: '',
    languagesProficiency: '',
    expertise: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    nationality: '',
    contactNo: '',
    mobileNo: '',
    faxNo: '',
    emailID: '',
    qualificationCriteria: '',
    industry: '',
    documentType: '',
    uploadFile: '',
    naceCodeRev1: '',
    naceCodeRev2: '',
    efCodes: '',
    riskCategory: '',
    training: '',
    otherQualifications: '',
    relevantSeminars: '',
    workExperienceYears: '',
    organizationName: '',
    organizationBusinessLine: '',
    tenure: '',
    rolesResponsibilities: '',
    yearsInConsultancy: '',
    consultancySector: '',
    numberOfClients: '',
    yearsInAuditing: '',
    auditedSector: '',
    numberOfMandays: '',
    yearsInTraining: '',
    numberOfTrainings: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('file ka data', file);
    if (file) {
      setSelectedFile(file);
      setFormData((prevData) => ({
        ...prevData,
        uploadFile: file,
      }));
      console.log(file);
    }
  };

  // Add selected file to the list and update formData
  const handleAddToSelection = () => {
    if (selectedFile) {
      setSelectedFiles((prevFiles) => [...prevFiles, selectedFile]);
      setFormData((prevData) => ({
        ...prevData,
        uploadFile: selectedFile,
      }));
      setSelectedFile(null); // Clear selected file after adding
    }
  };
  const handleDelete = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auditor/auditorLanguage')
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) =>
        console.error('Error fetching auditor qualifications:', error),
      );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleriskCategoryChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      riskCategory: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (
        !formData.applyFor ||
        !formData.title ||
        !formData.documentType ||
        !formData.industry ||
        !formData.isPartOfIRS ||
        !formData.isPartOfISSPL ||
        !formData.standard ||
        !formData.zone
      ) {
        console.log(formData.applyFor, '1');
        console.log(formData.title, '2');
        console.log(formData.documentType, '3');
        console.log(formData.industry, '4');
        console.log(formData.isPartOfIRS, '5');
        console.log(formData.isPartOfISSPL, '6');
        console.log(formData.standard, '7');
        console.log(formData.zone, '8');
        console.log(formData.qualificationCriteria, '9');
        console.log(formData.country, '10');

        alert('some csv file are not selected.');
        return;
      }

      const response = await axios.post(
        'http://localhost:8000/api/auditor/auditors',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('AUDITOR BIO DATA API RESPONSE', response);
      console.log(formData.uploadFile, 'AADDDSASSS');
    } catch (error) {
      console.log(error, 'AUDITOR BIO DATA API ERROR RESPONSE');
    }
  };

  const [applyForOptions, setApplyForOptions] = useState([]);
  const [selectDocumentType, setSelectDocumentType] = useState([]);
  const [standardOptions, setStandardOptions] = useState([]);
  const [efCodesOptions, setEfCodesOptions] = useState([]);
  const [naceCodeRev1Options, setNaceCodeRev1Options] = useState([]);
  const [naceCodeRev2Options, setNaceCodeRev2Options] = useState([]);
  const [zoneOptions, setZoneOptions] = useState([]);
  const [titleOptions, setTitleOptions] = useState([]);
  const [selectIsPartOfISSPL, setSelectIsPartOfISSPL] = useState([]);
  const [selectIsPartOfIRS, setSelectIsPartOfIRS] = useState([]);
  const [qualificationCriteria, setQualificationCriteria] = useState([]);
  const [selectIndustry, setSelectIndustry] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [languagesProficiency, setLanguagesProficiency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          applyForOptions,
          selectDocumentType,
          standardResponse,
          zoneResponse,
          titleResponse,
          selectIsPartOfISSPL,
          selectIsPartOfIRS,
          qualificationCriteria,
          selectIndustry,
          languages,
          languagesProficiency,
          efCodesResponse,
          naceCodeRev1Response,
          naceCodeRev2Response,
        ] = await Promise.all([
          axios.get('http://localhost:8000/api/auditor/auditorApplyFors'),
          axios.get('http://localhost:8000/api/auditor/auditorDocumentTypes'),
          axios.get('http://localhost:8000/api/auditor/auditorStandards'),
          axios.get('http://localhost:8000/api/questionnaire/zone'),
          axios.get('http://localhost:8000/api/auditor/auditorTitles'),
          axios.get('http://localhost:8000/api/auditor/auditorIsPartOfISSPL'),
          axios.get('http://localhost:8000/api/auditor/auditorIisPartOfIRS'),
          axios.get(
            'http://localhost:8000/api/auditor/auditorQualificationCriteria',
          ),
          axios.get('http://localhost:8000/api/auditor/auditorIndustry'),
          axios.get('http://localhost:8000/api/auditor/auditorLanuage'),
          axios.get(
            'http://localhost:8000/api/auditor/auditorLanuageProficiency',
          ),
          axios.get('http://localhost:8000/api/auditor/auditorIAFCodes'),
          axios.get('http://localhost:8000/api/auditor/naceCodeRev1'),
          axios.get('http://localhost:8000/api/auditor/auditorNaceRev2'),
        ]);
        setApplyForOptions(applyForOptions.data);
        setSelectDocumentType(selectDocumentType.data);
        setStandardOptions(standardResponse.data);
        if (zoneResponse.data.success) {
          setZoneOptions(zoneResponse.data.data);
        } else {
          console.error('Failed to fetch zone options:', zoneResponse.data);
        }
        setTitleOptions(titleResponse.data);
        setSelectIsPartOfISSPL(selectIsPartOfISSPL.data);
        setSelectIsPartOfIRS(selectIsPartOfIRS.data);
        setQualificationCriteria(qualificationCriteria.data);
        setSelectIndustry(selectIndustry.data);
        setLanguages(languages.data);
        setLanguagesProficiency(languagesProficiency.data);
        setEfCodesOptions(efCodesResponse.data);
        setNaceCodeRev1Options(naceCodeRev1Response.data);
        setNaceCodeRev2Options(naceCodeRev2Response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);

  const [workExperiences, setWorkExperiences] = useState([
    {
      workExperienceYears: '',
      organizationName: '',
      organizationBusinessLine: '',
      tenure: '',
      rolesResponsibilities: '',
    },
  ]);

  const [consultancyExperiences, setConsultancyExperiences] = useState([
    {
      yearsInConsultancy: '',
      consultancySector: '',
      numberOfClients: '',
    },
  ]);

  const [trainingExperiences, setTrainingExperiences] = useState([
    {
      yearsInTraining: '',
      trainingSector: '',
      numberOfTrainings: '',
    },
  ]);

  const [auditingExperiences, setAuditingExperiences] = useState([
    {
      yearsInAuditing: '',
      auditedSector: '',
      numberOfMandays: '',
    },
  ]);

  const handleAddExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        workExperienceYears: '',
        organizationName: '',
        organizationBusinessLine: '',
        tenure: '',
        rolesResponsibilities: '',
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    // Update workExperiences
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);

    // Update SubmittedData based on field
    if (field === 'workExperienceYears') {
      setFormData((prevData) => ({
        ...prevData,
        workExperienceYears: value,
      }));
    } else if (field === 'organizationName') {
      setFormData((prevData) => ({
        ...prevData,
        organizationName: value,
      }));
    } else if (field === 'organizationBusinessLine') {
      setFormData((prevData) => ({
        ...prevData,
        organizationBusinessLine: value,
      }));
    } else if (field === 'tenure') {
      setFormData((prevData) => ({
        ...prevData,
        tenure: value,
      }));
    } else if (field === 'rolesResponsibilities') {
      setFormData((prevData) => ({
        ...prevData,
        rolesResponsibilities: value,
      }));
    }
  };

  const handleAddConsultancy = () => {
    setConsultancyExperiences([
      ...consultancyExperiences,
      {
        yearsConsultancy: '',
        consultancySector: '',
        numberOfClients: '',
      },
    ]);
  };

  const handleConsultancyInputChange = (index, field, value) => {
    // Update consultancyExperiences
    const updatedExperiences = [...consultancyExperiences];
    updatedExperiences[index][field] = value;
    setConsultancyExperiences(updatedExperiences);

    // Update SubmittedData based on field
    if (field === 'yearsInConsultancy') {
      setFormData((prevData) => ({
        ...prevData,
        yearsInConsultancy: value,
      }));
    } else if (field === 'consultancySector') {
      setFormData((prevData) => ({
        ...prevData,
        consultancySector: value,
      }));
    } else if (field === 'numberOfClients') {
      setFormData((prevData) => ({
        ...prevData,
        numberOfClients: value,
      }));
    }
  };

  const handleAddTraining = () => {
    setTrainingExperiences([
      ...trainingExperiences,
      {
        yearsInTraining: '',
        trainingSector: '',
        numberOfTrainings: '',
      },
    ]);
  };

  const handleTrainingInputChange = (index, field, value) => {
    // Update trainingExperiences
    const updatedExperiences = [...trainingExperiences];
    updatedExperiences[index][field] = value;
    setTrainingExperiences(updatedExperiences);

    // Update SubmittedData based on field
    if (field === 'yearsInTraining') {
      setFormData((prevData) => ({
        ...prevData,
        yearsInTraining: value,
      }));
    } else if (field === 'trainingSector') {
      setFormData((prevData) => ({
        ...prevData,
        trainingSector: value,
      }));
    } else if (field === 'numberOfTrainings') {
      setFormData((prevData) => ({
        ...prevData,
        numberOfTrainings: value,
      }));
    }
  };

  // Auditing Handlers
  const handleAddAuditing = () => {
    setAuditingExperiences([
      ...auditingExperiences,
      {
        yearsInAuditing: '',
        auditedSector: '',
        numberOfMandays: '',
      },
    ]);
  };

  const handleAuditingInputChange = (index, field, value) => {
    // Update auditingExperiences
    const updatedAuditings = [...auditingExperiences];
    updatedAuditings[index][field] = value;
    setAuditingExperiences(updatedAuditings);

    // Update formData based on the field
    if (field === 'yearsInAuditing') {
      setFormData((prevData) => ({
        ...prevData,
        yearsInAuditing: value,
      }));
    } else if (field === 'auditedSector') {
      setFormData((prevData) => ({
        ...prevData,
        auditedSector: value,
      }));
    } else if (field === 'numberOfMandays') {
      setFormData((prevData) => ({
        ...prevData,
        numberOfMandays: value,
      }));
    }
  };

  const [visibleSections, setVisibleSections] = useState({
    workExperience: false,
    consultancy: false,
    auditing: false,
    training: false,
  });

  // Generalized toggle function
  const toggleSection = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // console.log(formData);

  return (
    <>
      {/* Main Container for Fields */}
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-black mb-4">
          Auditor Biodata Information
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {/* Field: Apply For */}
          <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Apply For
            </label>
            <Form.Select
              aria-label="Select Application Type"
              className="mt-2"
              name="applyFor"
              value={formData.applyFor}
              onChange={handleChange}
            >
              <option>Select</option>
              {applyForOptions.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="zone"
              className="font-medium text-black dark:text-white mb-1"
            >
              Zone
            </label>
            <Form.Select
              className="mt-2"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {Array.isArray(zoneOptions) && zoneOptions.length > 0 ? (
                zoneOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))
              ) : (
                <option disabled>Loading options...</option> // Placeholder if no options available
              )}
            </Form.Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="font-medium text-black dark:text-white mb-1"
            >
              Title
            </label>
            <Form.Select
              aria-label="Select Title"
              className="mt-2"
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {titleOptions.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Name
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Field: Birth Date */}
          <div className="flex flex-col">
            <label
              htmlFor="birthDate"
              className="font-medium text-black dark:text-white mb-1"
            >
              Birth Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border rounded-lg w-[100%] p-2"
              placeholderText="Select"
            />
          </div>

          {/* Field: Is part of ISSPL? */}
          <div className="flex flex-col">
            <label
              htmlFor="isspl"
              className="font-medium text-black dark:text-white mb-1"
            >
              Is part of ISSPL?
            </label>
            <Form.Select
              aria-label="Select ISSPL Status"
              className="mt-2"
              name="isPartOfISSPL"
              value={formData.isPartOfISSPL}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {selectIsPartOfISSPL.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Is part of IRS? */}
          <div className="flex flex-col">
            <label
              htmlFor="irs"
              className="font-medium text-black dark:text-white mb-1"
            >
              Is part of IRS?
            </label>
            <Form.Select
              aria-label="Select IRS Status"
              className="mt-2"
              name="isPartOfIRS"
              value={formData.isPartOfIRS}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {selectIsPartOfIRS.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Expertise
            </label>
            <Form.Control
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Expertise"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Address
            </label>
            <Form.Control
              name="address"
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              City
            </label>
            <Form.Control
              name="city"
              as="textarea"
              aria-label="city"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              State
            </label>
            <Form.Control
              name="state"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Pin code
            </label>
            <Form.Control
              name="pinCode"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Pin code"
              value={formData.pinCode}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Country
            </label>
            <Form.Control
              name="country"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="title"
              className="font-medium text-black dark:text-white mb-1"
            >
              Language
            </label>
            <Form.Select
              aria-label="Select Title"
              className=""
              name="languages"
              value={formData.languages}
              onChange={handleChange}
            >
              <option>Select</option>
              {languages.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="title"
              className="font-medium text-black dark:text-white mb-1"
            >
              Language Proficiency
            </label>
            <Form.Select
              aria-label="Select Title"
              className=""
              name="languagesProficiency"
              value={formData.languagesProficiency}
              onChange={handleChange}
            >
              <option>Select</option>
              {languagesProficiency.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="flex flex-col w-1/2">
            <label
              htmlFor="educationDetails"
              className="font-medium text-black dark:text-white mb-1"
            >
              Educational Details
            </label>
            <Form.Control
              id="educationDetails"
              type="text"
              className="border rounded-lg"
              placeholder="Enter your education details"
              value={formData.educationDetails}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Contact Information Section */}
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-3">
          {/* Field: Nationality */}
          <div className="flex flex-col">
            <label
              htmlFor="nationality"
              className="font-medium text-black dark:text-white mb-1"
            >
              Nationality
            </label>
            <Form.Control
              name="nationality"
              as="textarea"
              aria-label="Nationality"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>

          {/* Field: Contact No. */}
          <div className="flex flex-col">
            <label
              htmlFor="contactNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Contact No.
            </label>
            <Form.Control
              name="contactNo"
              as="input"
              type="text"
              aria-label="contactNo"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              pattern="^\d{10}$"
              maxLength="10"
              title="Please enter exactly 10 digits"
            />
          </div>

          {/* Field: Mobile No. */}
          <div className="flex flex-col">
            <label
              htmlFor="mobileNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Mobile No.
            </label>
            <Form.Control
              name="mobileNo"
              as="input"
              type="text"
              aria-label="mobileNo"
              className="p-2 border rounded-lg"
              placeholder="Mobile No"
              value={formData.mobileNo}
              onChange={handleChange}
              pattern="^\d{10}$"
              maxLength="10"
              title="Please enter exactly 10 digits"
            />
          </div>

          {/* Field: Fax No. */}
          <div className="flex flex-col">
            <label
              htmlFor="faxNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Fax No.
            </label>
            <Form.Control
              name="faxNo"
              as="textarea"
              aria-label="faxNo"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="faxNo"
              value={formData.faxNo}
              onChange={handleChange}
            />
          </div>

          {/* Field: Email ID */}
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Email ID
            </label>
            <Form.Control
              name="emailID"
              as="textarea"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              value={formData.emailID}
              onChange={handleChange}
              aria-label="Email ID"
              placeholder="Email ID"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Other Professional Qualifications
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-medium text-black dark:text-white mb-1"
            >
              Training
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Affilation with any certification
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3 ">
          <div className="flex flex-col">
            <label
              htmlFor="seminars"
              className="font-medium text-black dark:text-white mb-1 whitespace-nowrap"
            >
              Relevant Seminars / Conferences Attended
            </label>
            <Form.Control
              id="seminars"
              type="text"
              className="border rounded-lg"
              aria-label="Seminars Attended"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="activities"
              className="font-medium text-black dark:text-white mb-1 whitespace-nowrap"
            >
              Other Continuous Improvement and Skill Development Activities
            </label>
            <Form.Control
              id="activities"
              type="text"
              className="border rounded-lg"
              aria-label="Skill Development"
              placeholder="Enter"
            />
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------- */}
        <br />
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-6 mb-3">
          Work Experience including Consultancy / Auditing / Training
        </h2>{' '}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('workExperience')}
        >
          {visibleSections.workExperience
            ? 'Close Work Experience'
            : 'Add Work Experience'}
        </button>
        {visibleSections.workExperience && (
          <div>
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <h3 className="font-bold text-black text-l dark:text-white mr-2 mt-2 mb-3">
                  Work Experience {index + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
                  {[
                    {
                      label: 'No. of years in work experience',
                      field: 'workExperienceYears',
                    },
                    {
                      label: 'Name of the organization',
                      field: 'organizationName',
                    },
                    {
                      label: "Organization's line of business",
                      field: 'organizationBusinessLine',
                    },
                    {
                      label: 'Tenure',
                      field: 'tenure',
                    },
                    {
                      label:
                        'Roles and responsibilities w.r.t. required competencies',
                      field: 'rolesResponsibilities',
                    },
                  ].map(({ label, field }) => (
                    <div key={field} className="flex flex-col">
                      <label className="font-medium text-black dark:text-white mb-1">
                        {label}
                      </label>
                      <Form.Control
                        type="text"
                        className="border rounded-lg"
                        placeholder="Enter"
                        value={experience[field]} // Bind the current value from state
                        onChange={(e) =>
                          handleInputChange(index, field, e.target.value)
                        } // Handle input changes
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              className="flex justify-center rounded py-2 px-3 font-bold text-white mb-4"
              style={{ backgroundColor: '#343a40', border: 'none' }}
              onClick={handleAddExperience}
            >
              +
            </Button>
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('consultancy')}
        >
          {visibleSections.consultancy
            ? 'Close Consultancy Experience'
            : 'Add Consultancy Experience'}
        </button>
        {visibleSections.consultancy && (
          <div>
            {consultancyExperiences.map((experience, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <h3 className="font-bold text-black text-l dark:text-white mr-2 mt-2 mb-3">
                  Consultancy Experience {index + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
                  {[
                    {
                      label: 'No. of years in consultancy',
                      field: 'yearsInConsultancy',
                    },
                    {
                      label: 'Consultancy Provided in Sector',
                      field: 'consultancySector',
                    },
                    {
                      label: 'Number of Clients',
                      field: 'numberOfClients',
                    },
                  ].map(({ label, field }) => (
                    <div key={field} className="flex flex-col">
                      <label className="font-medium text-black dark:text-white mb-1">
                        {label}
                      </label>
                      <Form.Control
                        type="text"
                        className="border rounded-lg"
                        placeholder="Enter"
                        value={experience[field]} // Bind the current value from state
                        onChange={(e) =>
                          handleConsultancyInputChange(
                            index,
                            field,
                            e.target.value,
                          )
                        } // Handle input changes
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              className="flex justify-center rounded py-2 px-3 font-bold text-white mb-4"
              style={{ backgroundColor: '#343a40', border: 'none' }}
              onClick={handleAddConsultancy}
            >
              +
            </Button>
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('auditing')}
        >
          {visibleSections.auditing
            ? 'Close Auditing Experience'
            : 'Add Auditing Experience'}
        </button>
        {visibleSections.auditing && (
          <div>
            {auditingExperiences.map((experience, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <h3 className="font-bold text-black text-l dark:text-white mr-2 mt-2 mb-3">
                  Auditing Experience {index + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
                  {[
                    {
                      label: 'Number of Years in Auditing',
                      field: 'yearsInAuditing',
                    },
                    {
                      label: 'Audited in Sector',
                      field: 'auditedSector',
                    },
                    {
                      label: 'Number of Mandays',
                      field: 'numberOfMandays',
                    },
                  ].map(({ label, field }) => (
                    <div key={field} className="flex flex-col">
                      <label className="font-medium text-black dark:text-white mb-1">
                        {label}
                      </label>
                      <Form.Control
                        type="text"
                        className="border rounded-lg"
                        placeholder="Enter"
                        value={experience[field]} // Bind the current value from state
                        onChange={(e) =>
                          handleAuditingInputChange(
                            index,
                            field,
                            e.target.value,
                          )
                        } // Handle input changes
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              className="flex justify-center rounded py-2 px-3 font-bold text-white mb-4"
              style={{ backgroundColor: '#343a40', border: 'none' }}
              onClick={handleAddAuditing}
            >
              +
            </Button>
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('training')}
        >
          {visibleSections.training
            ? 'Close Training Experience'
            : 'Add Training Experience'}
        </button>
        {visibleSections.training && (
          <div>
            {trainingExperiences.map((experience, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <h3 className="font-bold text-black text-l dark:text-white mr-2 mt-2 mb-3">
                  Training Experience {index + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1 mb-2">
                  {[
                    {
                      label: 'No. of years in Training',
                      field: 'yearsInTraining',
                    },
                    {
                      label: 'Training imparted in Sector & on subject',
                      field: 'trainingSector',
                    },
                    {
                      label: 'Number of Trainings',
                      field: 'numberOfTrainings',
                    },
                  ].map(({ label, field }) => (
                    <div key={field} className="flex flex-col">
                      <label className="font-medium text-black dark:text-white mb-1">
                        {label}
                      </label>
                      <Form.Control
                        type="text"
                        className="border rounded-lg"
                        placeholder="Enter"
                        value={experience[field]} // Bind the current value from state
                        onChange={(e) =>
                          handleTrainingInputChange(
                            index,
                            field,
                            e.target.value,
                          )
                        } // Handle input changes
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              className="flex justify-center rounded py-2 px-3 font-bold text-white mb-4"
              style={{ backgroundColor: '#343a40', border: 'none' }}
              onClick={handleAddTraining}
            >
              +
            </Button>
          </div>
        )}
        {/* Supported Documents Section */}
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Supported Documents
        </h2>
        <div className="flex flex-row space-x-4 w-full">
          {/* Documents Type Dropdown */}
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="documentsType"
              className="font-medium text-black dark:text-white mb-1"
            >
              Documents Type
            </label>
            <Form.Select
              aria-label="Select Document Type"
              className="mt-2"
              name="documentType"
              value={formData.documentType}
              onChange={(e) =>
                setFormData({ ...formData, documentType: e.target.value })
              }
            >
              <option>Select</option>
              {selectDocumentType.map((document) => (
                <option key={document.id} value={document.name}>
                  {document.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* File Upload Field */}
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="fileUpload"
              className="font-medium text-black dark:text-white mb-1"
            >
              Upload File
            </label>
            <input
              name="uploadFile"
              type="file"
              id="fileUpload"
              className="border rounded-lg p-1 mt-2 bg-white"
              aria-label="File Upload"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex flex-row justify-start items-end mt-2">
          <Button
            variant="primary"
            className="mb-2 bg-[#152238]"
            onClick={handleAddToSelection}
          >
            Add to Selection
          </Button>
        </div>
        <div className="my-3">
          <div className="table-responsive">
            <Table hover className="table-striped table-borderless">
              <thead className="thead-light">
                <tr>
                  <th className="py-2 px-4">File Type</th>
                  <th className="py-2 px-4">File Name</th>
                  <th className="py-2 px-4">View</th>
                  <th className="py-2 px-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {selectedFiles.map((file, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{file.type}</td>
                    <td className="py-2 px-4">{file.name}</td>
                    <td className="py-2 px-4">
                      {/* View button, possibly link to file */}
                      <Button
                        variant="link"
                        className="bg-dark text-white border rounded-md shadow-md"
                      >
                        View
                      </Button>
                    </td>
                    <td className="py-2 px-4">
                      {/* Delete button */}
                      <Button
                        className="bg-dark text-white border rounded-md shadow-md"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {/* Field: Qualification Criteria */}
          <div className="flex flex-col">
            <label
              htmlFor="otherQualifications"
              className="font-medium text-black dark:text-white mb-1"
            >
              Qualification Criteria
            </label>
            <Form.Select
              aria-label="Select Qualification Criteria"
              name="qualificationCriteria"
              value={formData.qualificationCriteria}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {qualificationCriteria.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Industry */}
          <div className="flex flex-col">
            <label
              htmlFor="standard"
              className="font-medium text-black dark:text-white mb-1"
            >
              Industry
            </label>
            <Form.Select
              aria-label="Select Standard"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Select</option>
              {selectIndustry.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Standard */}
          <div className="flex flex-col">
            <label
              htmlFor="zone"
              className="font-medium text-black dark:text-white mb-1"
            >
              Standard
            </label>
            <Form.Select
              name="standard"
              value={formData.standard}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="">Select</option>
              {standardOptions.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        {formData.standard === 'ISO 14001:2015' && (
          <div className="mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Generic Knowledge About ISO 14001
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>The Environmental Terminology Used</th>
                  <th>
                    About techniques involved for Evaluation of Environmental
                    Aspect & Impact and their significance
                  </th>
                  <th>
                    Knowledge of Environmental Emergencies preparedness &
                    response. Mitigation associated with adverse Environmental
                    Impact
                  </th>
                  <th>Knowledge of operational control with respect to</th>
                  <th>
                    For Factors Related to Geography, Climate, Hydrogeology,
                    Topography soil condition resulting in potential
                    environmental impacts
                  </th>
                  <th>
                    During Design stage: Approach / concept of application
                    related to environmental aspect / impact / life cycle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        {formData.standard === ' ISO 45001:2018' && (
          <div className="mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Generic Knowledge About ISO 45001
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Terminology, principles, processes and concepts of OH&S
                  </th>
                  <th>
                    About techniques involved for Hazard Identification & Risk
                    Assessment and Eliminating hazards and reducing OH&S risks
                  </th>
                  <th>
                    Knowledge of Occupational Health & Safety Measurement &
                    Monitoring Technique
                  </th>
                  <th>Methodology and approach for Incident investigation</th>
                  <th>
                    Knowledge of methodologies for consultation and
                    participation, including obstacles and barriers
                  </th>
                  <th>
                    Operational Control Measure for Prevention of Injuries & Ill
                    Health
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        {/*EAF Codes*/}
        {(formData.standard === 'ISO 9001:2015' ||
          formData.standard === 'IATF 16949:2016' ||
          formData.standard === 'ISO 14001:2015' ||
          formData.standard === 'ISO 50001:2018' ||
          formData.standard === 'ISO 27001 : 2013' ||
          formData.standard === ' ISO 45001:2018') && (
          <div className="w-full mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Select EA/IAF Codes and Risk Category
            </h2>
            <div className="flex justify-between mb-4">
              {' '}
              {/* Add flex container */}
              <div className="flex flex-col w-1/2 pr-2">
                <label
                  htmlFor="efCodes"
                  className="font-medium text-black dark:text-white mb-1 mt-3"
                >
                  EAF Code
                </label>
                <Form.Select
                  name="efCodes"
                  value={formData.efCodes}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {efCodesOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                <label
                  htmlFor="riskCategory"
                  className="font-medium text-black dark:text-white mb-1 mt-1"
                >
                  Risk Category
                </label>
                <Form.Select
                  aria-label="Select Application Type"
                  value={formData.riskCategory}
                  onChange={handleriskCategoryChange}
                  className="mt-2"
                >
                  <option>Select</option>

                  {/* Add more options */}
                </Form.Select>
              </div>
            </div>

            {formData.standard === 'ISO 9001:2015' && (
              <div className="w-full mt-4">
                {' '}
                {/* Full width for NACE codes section */}
                <h2 className="font-bold text-black text-xl dark:text-white mb-3">
                  Select Nacecodes
                </h2>
                <div className="flex justify-between mb-4">
                  {' '}
                  {/* Add flex container */}
                  <div className="flex flex-col w-1/2 pr-2">
                    <label
                      htmlFor="efCodes"
                      className="font-medium text-black dark:text-white mb-1 mt-3"
                    >
                      Select Nacecodes (Rev 1)
                    </label>
                    <Form.Select
                      name="naceCodeRev1"
                      value={formData.naceCodeRev1}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {naceCodeRev1Options.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                  <div className="flex flex-col w-1/2 pl-2">
                    <label
                      htmlFor="efCodes"
                      className="font-medium text-black dark:text-white mb-1 mt-3"
                    >
                      Select Nacecodes (Rev 2)
                    </label>
                    <Form.Select
                      name="naceCodeRev2"
                      value={formData.naceCodeRev2}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {naceCodeRev2Options.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
              </div>
            )}

            {formData.standard === 'ISO 9001:2015' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Select Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>IAF/EA Code(s)</th>
                      <th>NACE Rev2</th>
                      <th>QMS-Risk</th>
                      <th>Key Process involved</th>
                      <th>Quality Control</th>
                      <th>Product Requirement</th>
                      <th>Applicable legal & statutory requirements</th>
                      <th> Link with Question Bank (Google Form)</th>
                      <th>Upload the Answer-sheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{formData.efCodes}</td>
                      <td>{formData.naceCodeRev2}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}

            {formData.standard === ' ISO 45001:2018' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>IAF/EA Code(s)</th>
                      <th>IAF/EA Code(s) Part Wise</th>
                      <th>OHS-Risk</th>
                      <th>Key Processes/Activities/Services involved</th>
                      <th>Sector Specific related hazards</th>
                      <th>Sector Specific potential emergencies</th>
                      <th>Sector Specific workplace monitoring</th>
                      <th>Sector Specific OH&S Legal & Others</th>
                      <th> Link with Question Bank (Google Form)</th>
                      <th>Upload the Answer-sheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}

            {formData.standard === 'ISO 50001:2018' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Master Technical Area for EnMS</th>
                      <th>Energy Related Experience</th>
                      <th>Reflect the relevant Question Bank</th>
                      <th>Submit the Answersheets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select>
                          <option value="">Drop Down for Selection</option>
                          <option value="MTA1">Main Technical Area 1</option>
                          <option value="MTA2">Main Technical Area 2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}

            {formData.standard === 'ISO 27001 : 2013' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Sectors</th>
                      <th>IAF / EA Code(s)</th>
                      <th>IT related Experience</th>
                      <th>Link with Question Bank (Google Form)</th>
                      <th>Submit the Answersheets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select>
                          <option value="">Select Details</option>
                          <option value="Detail1">Detail 1</option>
                          <option value="Detail2">Detail 2</option>
                          <option value="Detail3">Detail 3</option>
                        </select>
                      </td>{' '}
                      <td>
                        <select>
                          <option value="">Select Details</option>
                          <option value="Detail1">Detail 1</option>
                          <option value="Detail2">Detail 2</option>
                          <option value="Detail3">Detail 3</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        )}
        {/* Conditional Rendering for NACE codes */}
        {(formData.standard === 'IATF 16949:2016' ||
          formData.standard === 'ISO 13485 : 2016' ||
          formData.standard === 'ISO 28000 :2022' ||
          formData.standard === 'ISO 28000 :2007' ||
          formData.standard === 'ISO 21001:2018') && (
          <div className="w-full mt-4">
            {' '}
            {/* Full width for NACE codes section */}
            <h2 className="font-bold text-black text-xl dark:text-white mb-3">
              Select Nacecodes
            </h2>
            <div className="flex justify-between mb-4">
              {' '}
              {/* Add flex container */}
              <div className="flex flex-col w-1/2 pr-2">
                <label
                  htmlFor="efCodes"
                  className="font-medium text-black dark:text-white mb-1 mt-3"
                >
                  Select Nacecodes (Rev 1)
                </label>
                <Form.Select
                  name="naceCodeRev1"
                  value={formData.naceCodeRev1}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {naceCodeRev1Options.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                <label
                  htmlFor="efCodes"
                  className="font-medium text-black dark:text-white mb-1 mt-3"
                >
                  Select Nacecodes (Rev 2)
                </label>
                <Form.Select
                  name="naceCodeRev2"
                  value={formData.naceCodeRev2}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {naceCodeRev2Options.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>
            {formData.standard === 'IATF 16949:2016' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Select Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>IAF/EA Code(s)</th>
                      <th>NACE Rev2</th>
                      <th>QMS-Risk</th>
                      <th>Key Process involved</th>
                      <th>Quality Control</th>
                      <th>Product Requirement</th>
                      <th>Applicable legal & statutory requirements</th>
                      <th> Link with Question Bank (Google Form)</th>
                      <th>Upload the Answer-sheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{formData.efCodes}</td>
                      <td>{formData.naceCodeRev2}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
            {(formData.standard === 'ISO 28000 :2022' ||
              formData.standard === 'ISO 28000 :2007') && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Select Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Main Technical Area for SCSMS / SRSMS</th>
                      <th>Sub-Technical Area SCSMS / SRSMS</th>
                      <th>Supply Chain related experience</th>
                      <th>
                        Link with Competence Matrix Form No. 81 (Google Form)
                      </th>
                      <th>Submit the Duly filled Form No. 81</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
            {formData.standard === 'ISO 21001:2018' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Select Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Master Technical Area for EOMS</th>
                      <th>Processes involved</th>
                      <th>Competence required</th>
                      <th>
                        Legal / accreditation requirement [Legal Requirements &
                        Admission Process(s), as applicable]
                      </th>
                      <th>Process of Monitoring</th>
                      <th>
                        Link with Competence Matrix Form No. 128 (Google Form)
                      </th>
                      <th>Submission the Duly filled Form No. 128</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
            {formData.standard === 'ISO 13485 : 2016' && (
              <div className="mt-4">
                <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                  Technical Area
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th rowSpan="2">Main Technical Area (MTA)</th>
                      <th rowSpan="2">Sub Technical Area (STA)</th>
                      <th colSpan="2">PRODUCT RELATED KNOWLEDGE</th>
                      <th colSpan="3">PROCESS RELATED KNOWLEDGE</th>
                    </tr>
                    <tr>
                      <th>
                        List out few Products and services related to this
                        technical area
                      </th>
                      <th>
                        List at least 3 examples of typical
                        defects/non-conformances in this Technical Area
                      </th>
                      <th>
                        List at least 3 main critical processes in this
                        Technical Area and briefly describe one process
                      </th>
                      <th>
                        Identify at least 3 critical control points/Key testing
                        or measuring parameters from the above mentioned
                        processes in this technical area
                      </th>
                      <th>
                        List out possible externally provided processes,products
                        and services used by the clients related to this
                        technical area
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select>
                          <option value="">Drop Down for Selection</option>
                          <option value="MTA1">Main Technical Area 1</option>
                          <option value="MTA2">Main Technical Area 2</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Drop Down for Selection</option>
                          <option value="STA1">Sub Technical Area 1</option>
                          <option value="STA2">Sub Technical Area 2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>{' '}
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>{' '}
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>{' '}
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter data"
                          className="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
            {/* Conditionally render the table when "Technical Area" is selected */}
          </div>
        )}
        {formData.standard === 'ISO 14001:2015' && (
          <div className="mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Technical Area
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>IAF/EA Code(s)</th>
                  <th>IAF/EA Code(s) Part Wise</th>
                  <th>EMS-Risk</th>
                  <th>Key Processes/Activities</th>
                  <th>Sector Specific environmental aspects</th>
                  <th>Sector Specific operational control</th>
                  <th>Sector Specific environmental legal</th>
                  <th>Applicable legal & statutory requirements</th>
                  <th> Link with Question Bank (Google Form)</th>
                  <th>Submit the Answer-sheet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{formData.efCodes}</td>
                  <td> </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>{' '}
                  <td>
                    <input
                      type="text"
                      placeholder="Enter data"
                      className="form-control"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        {/* Buttons */}
        <div className="flex flex-row justify-end items-end mt-4 space-x-2">
          <button
            className="flex justify-center shadow rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-md dark:border-strokedark dark:text-white"
            type="button"
          >
            Close
          </button>
          <button
            className="flex justify-center rounded bg-[#152238] py-2 px-6 font-medium text-white hover:bg-opacity-90"
            type="submit"
          >
            Save Changes
          </button>
        </div>
        <div></div>
      </form>
    </>
  );
};

export default BiodataInfo;
