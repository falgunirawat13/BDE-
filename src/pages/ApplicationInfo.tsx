import React from 'react';

const ApplicationInfo = () => {
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
          INFORMATION FOR MANAGEMENT OF EXTRAORDINARY
          <br /> EVENTS OR CIRCUMSTANCES
        </h2>
      </div>
      <div>
        <div className="flex flex-col mb-4 mt-12">
          <div className="flex items-center mb-3">
            <h2 className="font-bold text-black fs-8 w-1/6">
              Name of the client :
            </h2>
            <input
              type="text"
              className="p-2 border rounded bg-white text-black cursor-text flex-1"
            />
          </div>

          <div className="flex items-center">
            <h2 className="font-bold text-black fs-8 w-1/6">Address :</h2>
            <input
              type="text"
              className="p-2 border rounded bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
        <h2 className="font-bold text-black mb-4 mt-5 fs-5">
          Please provide the information on the following as appropriate:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-3 mb-4">
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              1) When will the organization be able to function normally?
            </label>
            <div className="col-span-2 ml-12 mb-2">
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
              2) When will the organization be able to ship products or perform
              the service defined within the current scope of certification?
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
              3) Will the organization need to use alternative manufacturing
              and/or distribution sites? If so, are these currently covered
              under the current certification or will they need to be evaluated?
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
              4) Does existing inventory still meet customer specifications or
              will the certified organization contact its customers regarding
              possible concessions?
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
              5) If the certified organization is certified to a management
              system standard that requires a disaster recovery plan or
              emergency response plan, has the certified organization
              implemented the plan and was it effective?
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
              6) Will some of the processes and/or services performed or
              products shipped be subcontracted to other organizations? If so,
              how will the other organizations’ activities be controlled by the
              certified organization?
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
            <label className="font-medium text-black dark:text-white pb-2 col-span-2 text-justify">
              7) To what extent has operation of the management system been
              affected?
            </label>
            <div className="col-span-2 ml-12 mb-3">
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
              8) Has the organization conducted an impact assessment?
            </label>
            <div className="col-span-2 ml-12 mb-3">
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
              9) Identification of alternative sampling sites, as appropriate
            </label>
            <div className="col-span-2 ml-12 mb-3">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4">
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify">
              10) Changes since last audit
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Any change in Scope of Certification
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Legal Status
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Change in Organization Structure,
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Roles, Responsibilities, Authorities & Accountability
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Infrastructure & Layout
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
              Any Incident (Environmental or Health & Safety related)
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
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify">
              11) Additionally, for Food Scheme Changes in the Product, product
              cluster / HACCP studies applied for the scope of certification
            </label>
            <div className="col-span-2 ml-12">
              <div className="p-2 border rounded-lg bg-white text-black">
                <input
                  type="text"
                  className="w-full bg-transparent cursor-text"
                />
              </div>
            </div>
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
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
            <label className="font-medium text-black dark:text-white mb-4 pb-2 col-span-2 text-justify pl-7">
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
            <label className="font-medium text-black dark:text-white mb-1 pb-2 col-span-2 text-justify">
              12) Additionally, Energy management system (EnMS Saving in Energy
              consumption compared to last year.
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
              13) Additionally, Information Security Management System (ISMS)
              Have there any Cyber related incidents happened previously. If
              yes, brief details of the incident
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
        <div className="grid grid-cols-4 gap-2 mb-2 ">
          <h2 className="font-bold text-black mt-4 fs-5 col-span-2">
            Risk to be identified by Reviewer (for office use only):
          </h2>

          <div className="flex items-center space-x-15 col-span-2 ml-12">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="yesOption"
                className="mr-2 h-6 w-6 cursor-pointer"
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
                className="mr-2 h-6 w-6 cursor-pointer"
              />
              <label
                htmlFor="noOption"
                className="text-lg text-black dark:text-white"
              >
                No
              </label>
            </div>
          </div>
          <h2 className="font-bold text-black mb-4 mt-4 fs-5 col-span-2">
            NAME & SIGNATURE OF AUTHORISED PERSONNEL
          </h2>
          <div className="flex items-center col-span-2 ml-12 ">
            <input
              type="text"
              className="p-2 border rounded bg-white text-black cursor-text flex-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationInfo;
