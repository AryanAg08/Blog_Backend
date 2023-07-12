import react, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export function BlogCreate({
    history
}) {

    const BlogDetails = {
        Title: "",
        Author: "",
        Content: "",
    }
    const [blogDetails, setBlogDetails] = useState(BlogDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setBlogDetails({
            ...blogDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Saving...");
        let response = await fetch("http://localhost:5001/api/blog-create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(blogDetails),
        });
        setButtonText("Save your Blog!");
        let result = await response.json();
        setBlogDetails(BlogDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Blog Saved successfully, It will be available on your profile in few minutes!!'});
        }
        else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    };


    return (
        <section>
            <Container>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <input type="text" value={blogDetails.Title} placeholder="Title of the Blog" onChange={(e) => onFormUpdate('Title', e.target.value)} />
                        </Col> 
                        <Col>
                        <input type="text" value={blogDetails.Author} placeholder="Author of the Blog" onChange={(e) => onFormUpdate('Author', e.target.value)} />
                        </Col>
                        <Col size={12} className="px-1">
                      <textarea rows="6" value={blogDetails.Content} placeholder="Content" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                        status.message && 
                        <Col>
                        <p className={status.success === false ? "danger": "success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
                </form>
            </Container>
        </section>
    )
}