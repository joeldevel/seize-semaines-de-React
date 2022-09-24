import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";
import CreateInvoice from "./components/CreateInvoice";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <div className="icon-text">
                                        <span className="icon has-text-info">
                                            <span className="fas fa-info-circle">ℹ️</span>
                                        </span>
                                        <span>Select an invoice</span>
                                    </div>
                                </main>
                            }
                        />
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>
                    <Route path="create" element={<CreateInvoice/>}></Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
