import { Button } from './style'

const DefaultButton = ({ text, danger, onClick }) => {
    return (
        <Button 
            onClick={() => onClick()} 
            danger={ danger }>
                { text }
            </Button>
    )
}

export default DefaultButton