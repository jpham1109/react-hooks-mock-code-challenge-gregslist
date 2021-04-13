import { useState } from "react"

function ListingForm ({onAddListing}) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        const newListing = {
            description: formData.description,
            image: formData.image,
            location: formData.location
        }

        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListing)
        })
        .then(r => r.json())
        .then(onAddListing)
    }

    return (
        <form className="newlisting" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={handleChange}/>
            <input
                type="text"
                name="image"
                placeholder={"image link"}
                value={formData.image}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder={"location"}
                value={formData.location}
                onChange={handleChange}
            />
            <input type="submit" value="Add Listing" />
        </form>
    )
}

export default ListingForm;