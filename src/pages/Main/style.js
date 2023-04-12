import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 150%;
    background: #DDDDDD;
`;

export const Div = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    background: #FFFFFF;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #7695EC;
    display: flex;

    > .title-header {
        margin: 0 auto;
        padding: 20px;
        color: #FFFFFF;
    }
`

export const CreatePostForm = styled.div`
    width: 90%;
    height: 35%;
    
    margin: 0 auto;
    margin-top: 5%;
    box-sizing: border-box;

    background: #FFFFFF;
    border: 1px solid #999999;
    padding: 24px;
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
        margin-left: 85%;
        cursor: pointer;
        background: #47B960;
        border-radius: 8px;
        
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;

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

`;

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

        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

    > .button-create-post-invert {
        width: 15%;
        height: 33px;
        margin-top: 20px;
        margin-right: 8px;
        cursor: pointer;
        background: #FFF;
        border-radius: 8px;
        
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #000;

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

`;



export const Post = styled.div`
    width: 90%;
    height: 30%;
    margin: 0 auto;
    margin-top: 30px;

    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;

    > .header-post{
        width: 100%;
        height: 70px;

        display: flex;
        flex-direction: row;
        background: #7695EC;

        border-radius: 16px 16px 0px 0px;

        justify-content: space-between;

        > .header-post-title{
            margin-left: 24px;
            padding: 15px 0px;

            font-weight: bold;
            font-size: 1.375em;
            line-height: 1.625em;

            color: #FFFFFF;

            @media (max-width: 768px) {
            font-size: 1.3em;
            }
            
        }

        > .header-btns-post{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-right: 12px;
            padding: 3px;
            > .header-post-btn{
                width: auto;
                height: auto;

                background: transparent;

                border: none;
                cursor:pointer;

                padding: 15px;
                :hover {
                    transform: scale(1.3);
                }
                @media (max-width: 768px) {
                    :hover{
                        transform: none;
                    }
                }

            }
        }

    }

    > .div-info-post{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 25px;
        margin-top: 15px;
        
        > .div-info-username-post{
            font-weight:bold;
            font-size: 18px;
            line-height: 1.313em;

            color: #777777;
        }

        > .div-info-time-post{
            margin-right: 20px;

            font-size: 1.125em;
            line-height: 1.313em;
            text-align: right;

            color: #777777;
        }

    }

    > .content-post{
        width: 95%;
        height: 55%;
        
        margin: 0 auto;
        padding: 15px 25px;

        font-size: 1.125em;
        line-height: 1.313em;
        text-align: justify;
        color: #000000;

        @media (max-width: 768px) {
            font-size: 1em;
            line-height: 1em;
        }
    }

    .ui.modal.transition.visible {
        top: 38%;
        width: 660px;
        height: 446px !important;
    }

`;