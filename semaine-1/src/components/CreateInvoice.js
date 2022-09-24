import React from "react";

function CreateInvoice() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <div className="container mb-4">
            <form onSubmit={handleSubmit} className="mx-6">
                <h2 className="title is-3 has-text-centered">New invoice</h2>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Toulusse"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">number</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="3002"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">amount</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="1500"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Due</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="12/4/1999"
                        />
                    </div>
                </div>

                <input type="submit" value="create invoice" className="button is-warning"/>
            </form>
        </div>
    );
}

export default CreateInvoice;
