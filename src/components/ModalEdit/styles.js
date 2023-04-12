import styled from 'styled-components'

export const CreatePostFormModal = styled.div`
    width: 90%;
    height: 35%;
    
    margin: 0 auto;
    margin-top: 5%;
    padding-bottom: 20px;
    box-sizing: border-box;

    background: #FFFFFF;
    // padding: 24px;
    border-radius: 16px;

    > .title-create-post {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        
        color: #000000;
    }

    > 

    > .p-create-post {
        margin-bottom: 5px;

        font-size: 1em;
        line-height: 1.188em;

        color: #000000;
    }

    > .input-create-post {
        width: 100%;
        height: 32px;

        margin-bottom: 20px;
        background: #FFFFFF;
        border: 1px solid #777777;
        padding-left: 5px;
        border-radius: 8px;

        ::placeholder {
            padding-left: 5px;
            font-size: 0.875em;
            line-height: 1em;

            color: #CCCCCC;
        }
    }

    > .text-input-create-post {
        width: 100%;
        height: 74px;
        resize: none;

        background: #FFFFFF;
        border: 1px solid #777777;

        padding: 7px 10px;

        border-radius: 8px;

        ::placeholder {
            font-size: 0.875em;
            line-height: 1em;

            color: #CCCCCC;
        }
    }

    > .button-create-post {
        width: 15%;
        height: 33px;
        margin-top: 20px;
        margin-left: 8px;
        cursor: pointer;
        background: #47B960;
        border-radius: 8px;
        
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;
        float:right;

        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

    > .button-create-post-invert {
        width: 15%;
        height: 33px;
        margin-top: 20px;
        cursor: pointer;
        margin-right: 8px;
        background: #FFF;
        border-radius: 8px;
        
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #000;

        float: right;

        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

    > .button-create-post-disabled{
        width: 15%;
        height: 33px;

        margin-top: 20px;
        margin-left: 85%;

        background: #777777;
        border-radius: 8px;
        cursor: pointer;

        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;

        color: #FFFFFF;
        
        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

    .ui.modal.transition.visible {
        top: 28% !important;
        width: 660px;
        height: 446px !important;
    }

`;
// export const CreatePostFormEdit= styled.div`
//     width: 100vw;
//     height: 100vh;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
    
//     > .logo-img{
//         width: 50%;
//         @media (max-width: 768px) {
//             width: 100%;
//         }
//     }
// `;