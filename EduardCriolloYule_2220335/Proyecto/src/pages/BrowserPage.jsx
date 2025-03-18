// src/pages/BrowserPage.jsx
import React, { useState } from 'react';
import { DoublyLinkedList } from '../utils/DoublyLinkedList';

const BrowserPage = () => {
    const [history, setHistory] = useState(new DoublyLinkedList());
    const [currentPage, setCurrentPage] = useState(null);

    const visitPage = () => {
        const pageName = prompt("Enter the page name:");
        if (pageName) {
            history.append(pageName);
            setHistory(history);
            setCurrentPage(history.tail);
        }
    };

    const goBack = () => {
        if (currentPage && currentPage.prev) {
            setCurrentPage(currentPage.prev);
        }
    };

    const goForward = () => {
        if (currentPage && currentPage.next) {
            setCurrentPage(currentPage.next);
        }
    };

    return (
        <div className="text-center">
            <h1 className="mb-4">Browser History</h1>
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={visitPage}>
                    Visit Page
                </button>
                <button className="btn btn-warning me-2" onClick={goBack}>
                    Go Back
                </button>
                <button className="btn btn-success" onClick={goForward}>
                    Go Forward
                </button>
            </div>
            <div className="card text-center" style={{ width: '18rem', margin: '0 auto' }}>
                <div className="card-body">
                    <h5 className="card-title">Current Page</h5>
                    <p className="card-text">
                        {currentPage ? currentPage.value : "No page visited"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrowserPage;