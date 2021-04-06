import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ danger }) => danger ? '#df4759': '#2f2f2f'};
    color: #f2f2f2;
    width: 220px;
    border: none;
    border-radius: 4px;
    padding: .6rem .4rem;
    margin: auto;

    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;

    
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    
    -webkit-appearance: none;
    -moz-appearance: none;
    text-decoration: none;
    

:hover,
:focus {
    background: ${({ danger }) => danger ? '#ad2c3b': '#1e1e1e'};
}

:focus {
    outline: none;
    background: ${({ danger }) => danger ? '#ad2c3b': '#1e1e1e'};
}

:active {
    transform: scale(.96);
}
`