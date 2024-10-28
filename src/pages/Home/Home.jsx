import Form from '../../components/Form/Form'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const context = useContext(quizContext)
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/roles')
    }

    return (
        <>
            <div className="container my-3">
                <Text mb={'4'} fontSize='4xl'>Identificação</Text>
                <hr />
                <Form handleSubmit={handleSubmit}  />
            </div>
        </>
    )
}

export default Home
