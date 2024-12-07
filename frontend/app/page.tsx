'use client'

import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically implement email sending logic
    console.log('Sending email:', { recipient, subject, body });
    // Optional: Add toast or alert to confirm email sent
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Compose Email</h2>
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <input
              type="email"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="recipient@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email Subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message here..."
              required
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}