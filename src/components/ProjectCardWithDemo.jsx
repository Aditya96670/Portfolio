import React, { useState } from "react";

/**
 * ProjectCardWithDemo
 * - shows project thumbnail + name
 * - has a "Demo credentials" badge so visitors notice immediately
 * - opens a modal with description + two demo accounts (employee & admin)
 * - each credential row has a copy-to-clipboard button and a show/hide password toggle
 * - includes a short instruction line so visitors know they can log in
 */

const CredentialRow = ({ label, email, password }) => {
  const [showPwd, setShowPwd] = useState(false);
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // small visual feedback could be added (toast/snackbar). For simplicity:
      alert(`${text} copied to clipboard`);
    } catch (err) {
      alert("Copy failed — select and copy manually.");
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-gray-800/60 p-3 rounded-md">
      <div>
        <div className="text-sm text-gray-300 font-medium">{label}</div>
        <div className="mt-1 text-gray-200 text-sm break-all">
          <span className="font-semibold">{email}</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-gray-300 text-sm">Password:</span>
          <span className="text-gray-200 font-medium">
            {showPwd ? password : "•".repeat(Math.max(3, password.length))}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => copy(email)}
          className="px-3 py-1 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
        >
          Copy Email
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => copy(password)}
            className="px-3 py-1 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            Copy Pwd
          </button>
          <button
            onClick={() => setShowPwd((s) => !s)}
            className="px-2 py-1 text-sm rounded-md bg-gray-700 hover:bg-gray-600 text-white"
            aria-pressed={showPwd}
          >
            {showPwd ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCardWithDemo = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full max-w-sm p-3 bg-gray-900 rounded-xl shadow-md cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Badge so visitors notice demo creds */}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          Demo creds
        </div>

        {/* Thumbnail */}
        <img
          src={project.image}
          alt={project.name}
          className="rounded-md w-full h-44 object-cover"
        />

        <h3 className="mt-3 text-lg font-bold text-white">{project.name}</h3>
        <p className="text-gray-300 mt-1 text-sm">
          {project.shortDescription}
        </p>

        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
          >
            View demo & info
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm underline text-gray-200"
          >
            Open live
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-200 text-xl"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md w-full h-48 object-cover"
                />
                <h2 className="text-2xl font-bold text-white mt-4">
                  {project.name}
                </h2>
                <p className="text-gray-300 mt-2">{project.longDescription}</p>

                {/* Clear instruction so users know they can log in */}
                <p className="mt-4 text-sm text-yellow-300 bg-yellow-900/10 p-3 rounded">
                  Demo logins below — use them on the project's login page to
                  try the app (no signup required).
                </p>
              </div>

              {/* Right: credentials */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <CredentialRow
                  label="Employee (test user)"
                  email={project.demo.employee.email}
                  password={project.demo.employee.password}
                />
                <CredentialRow
                  label="Admin (full access)"
                  email={project.demo.admin.email}
                  password={project.demo.admin.password}
                />

                <div className="text-xs text-gray-400 mt-2">
                  Note: These are demo accounts only. Do not use real personal
                  data. If you change the demo password in your backend, update
                  this info here too.
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
              >
                Go to login page
              </a>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-700 text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardWithDemo;

/* Example project data to use:
const project = {
  name: "Employee Management System",
  image: "/images/ems.png",
  shortDescription: "Click to view demo logins & try the app.",
  longDescription: "Simple EMS for managing employees, attendance, and tasks.",
  link: "https://your-ems-app.example.com/login",
  demo: {
    employee: { email: "e@e", password: "123" },
    admin: { email: "admin@example.com", password: "123" },
  },
};
*/
