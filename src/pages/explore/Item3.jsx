import React, { useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { Editor } from "primereact/editor";
import Breadcrumb from "../Breadcrumb";

// Create a stylish PDF document component
const MyDocument = ({ title, content, imageUrl }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.body}>
        <Image src={imageUrl} style={styles.image} />
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.footer}>Generated on: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#555",
  },
  footer: {
    marginTop: 20,
    fontSize: 10,
    color: "#888",
    textAlign: "center",
  },
});

const ExploreItem3 = () => {
  const [inputText, setInputText] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/600');

  return (
    <div className="min-h-screen ">
      <Breadcrumb />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">Dynamic PDF Generation</h1>
        <p className="mb-10 text-lg text-center text-white">
          Create a beautifully formatted PDF document by entering your content below.
        </p>

        <div className="mb-6">
          <input
            type="text"
            className="flex-grow h-12 p-4 rounded-lg outline-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            placeholder="Enter PDF title..."
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          
          <Editor className="border border-gray-300 rounded-lg mb-5 p-4 bg-white"
            value={inputText}
            onTextChange={(e) => setInputText(e.htmlValue)}
            style={{ height: '320px', marginBottom: '20px' }}
          />
          
          <input
            type="text"
            className="flex-grow h-12 p-4 rounded-lg outline-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            placeholder="Enter image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <PDFDownloadLink 
            document={<MyDocument title={inputTitle} content={inputText} imageUrl={imageUrl} />}
            fileName="generated_document.pdf"
            className="w-full py-4  px-6 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
          >
            {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
          </PDFDownloadLink>
        </div>

        {inputText && (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Your PDF Content Preview</h2>
            <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: inputText }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreItem3;
