import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
let instilize = {
    img: "",
    name: ""
}
const Add = () => {

    let [Addobj, setAddobj] = useState(instilize)
    let [Addarr, setAddarr] = useState(JSON.parse(localStorage.getItem("ProdcutList")) || [])
    let [upid, setUpid] = useState(-1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandelInput = (e) => {
        let { name, value } = e.target
        setAddobj((old) => ({ ...old, [name]: value }))
    }

    const HandelSubmit = (e) => {
        e.preventDefault();
        if (upid < 0) {
            setAddarr([...Addarr, Addobj])
        }
        else {
            // setAddarr(Addarr[upid]==Addobj)
            let data = [...Addarr]
            console.log(data);
            data[upid] = Addobj
            setAddarr(data)
            // console.log(Addarr[upid])
            // console.log(Addarr);
        }
    }
    useEffect(() => {
        localStorage.setItem("ProdcutList", JSON.stringify(Addarr))
    }, [Addarr])

    return (
        <>
            <div className='d-flex'>
                <Button variant="primary" className='bg-white text-black col-2 border-0 fs-4 fw-semibold mx-auto text-uppercase' onClick={handleShow}>add your post <i class="bi bi-plus-square"></i></Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>post your img</Modal.Title>
                </Modal.Header>
                <form onSubmit={HandelSubmit} className='col-8 mx-auto'>
                    <Modal.Body>
                        <input type="text" className='col-12 mb-2 border-3 border-top-0 border-start-0 border-end-0 text-uppercase border-black' placeholder='enter your name' onChange={HandelInput} value={Addobj.name} name='name' />
                        <input type="url" className='col-12 mb-2 border-3 border-top-0 border-start-0 border-end-0 text-uppercase border-black' placeholder='enter zudio img' onChange={HandelInput} value={Addobj.img} name="img" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <input className='btn btn-primary' type="submit" value={upid < 0 ? "submit" : "update"} />
                    </Modal.Footer>
                </form>
            </Modal>
            <Container>
                <Row>
                    {Addarr.map((pro, index) => {
                        return <>
                            <Col xs={12} md={4} className='p-0 py-2'>
                                <img src={pro.img} alt="" />
                                <p className='text-center teaxt-uppercasen'>{pro.name}</p>
                            </Col>
                        </>
                    })}

                </Row>
            </Container>
            <h1 className='text-center text-uppercase fw-light font-monospace'>over happy customer</h1>
        </>
    )
}

export default Add