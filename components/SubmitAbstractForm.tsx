import { useState } from 'react'
import React from 'react'
import { app, database } from '../firebaseConfig'
import {} from 'firebase/database'

const SubmitAbstractForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [country, setCountry] = useState('');
  const [files, setFiles] = useState([]);

  const [areasOfResearch, setAreasOfResearch] = useState([]);

  const [errorMsg, setErrorMsg] = useState(null);

  // handle submit
  const handleSubmit = (e: {
    target: HTMLFormElement | undefined; preventDefault: () => void;
  }) => {
    e.preventDefault();
    setTitle('');
    setName('');
    setEmail('');
    setAffiliation('');
    setCountry('');
    setAreasOfResearch([]);
    setFiles([]);

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  const handleFileSubmit = (e: { target: { files: any; }; }) => {
    const newFiles = [...files, ...e.target.files];
    setFiles(newFiles);
  }

  const handleFileRemove = (indexToRemove: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAreaOfResearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.options;
    const selectedAreasOfResearch = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedAreasOfResearch.push(options[i].value);
      }
    }
    setAreasOfResearch(selectedAreasOfResearch);
  };

  const areasOfResearchList = [
    "GIS Applications",
    "Location-based services",
    "remote Sensing Applications",
    "Geomatics Professional Standards",
    "Geomatics Education",
    "Spatial Information Management",
    "Hydrographic Surveying",
    "Positioning and Measurement",
    "Engineering and Mining Surveying",
    "Cadastre and Land Management",
    "History of Surveying and Measurement",
    "Cartography",
    "Interated Spatial Planning",
    "UAV, Photogrammetry and LiDAR Applications",
    "Land Management",
  ];

  const researchAreaList = areasOfResearchList.map((option, index) => (
    <label key={index} className="inline-flex items-center mr-4">
      <div className='flex items-center my-3'>
        <input
          type="checkbox"
          value={option}
          className="form-checkbox h-5 w-5 text-blue-600"
          onChange={handleAreaOfResearchChange}
        />
        <span className="ml-2 text-gray-700">{option}</span>
      </div>
    </label>
  ));


  const fileList = files.map((file, index) => (
    <div key={index} className="flex items-center mb-2">
      <p className="mr-2">{file.name}</p>
      <button
        type="button"
        className="text-red-600 hover:text-red-800"
        onClick={() => handleFileRemove(index)}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <>
      <form onSubmit={handleSubmit} action="submit">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <select
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          >
            <option value="">Select a title</option>
            <option value="Prof">Prof</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
            Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="affiliation">
            Affiliation
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="affiliation"
            name="affiliation"
            type="text"
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Country
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            name="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Area of Research:</label>
          {researchAreaList}
        </div>

        <div className="mb-4">
          <label>Upload Files:</label>
          <div className="flex flex-col">
            <input
              type="file"
              multiple
              // onChange={handleFileInputChange}
              className="mb-2"
            />
            {fileList}
          </div>
        </div>


        <button
          type="submit"
          className="bg-darkGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default SubmitAbstractForm