import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  position: reletive;
`;

export const Heading = styled.h1`
  font-size: 28px;
  line-height: 135%;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
  color: #192036;
`;

export const Button = styled.button`
  padding: 0 15px;
  width: fit-content;
  height: 32px;
  background: #6280da;
  border-radius: 4px;
  font-weight: bold;
  font-size: 10px;
  line-height: 135%;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  margin: ${({ m }) => m};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
  background: #6280da;
  &:disabled {
    opacity: 0.3;
  }
`;

export const Create = styled(Button)`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 90px;
`;

export const All = styled(Button)`
  background: ${({ active }) => (active ? "#6280DA" : "#BFDCFC")};
  position: absolute;
  right: 25px;
  top: 69px;
  width: 90px;
`;

export const Active = styled(Button)`
  background: ${({ active }) => (active ? "#6280DA" : "#BFDCFC")};
  position: absolute;
  right: 25px;
  top: 113px;
  width: 90px;
`;

export const Done = styled(Button)`
  background: ${({ active }) => (active ? "#6280DA" : "#BFDCFC")};
  position: absolute;
  right: 25px;
  top: 157px;
  width: 90px;
`;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  max-width: 1000px;
  padding: 25px;
  box-sizing: border-box;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  opacity: ${({ done }) => (done ? 0.7 : 1)};
  transition: all 0.3s linear;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardHead = styled.h3`
  font-size: 16px;
  line-height: 135%;
  color: #181818;
  margin: 0 0 25px;
  display: flex;
  align-items: center;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 150%;
  height: ${({ height, open }) =>
    !height ? "fit-content" : open ? `${height}px` : "42px"};
  transition: all 0.1s linear;
  margin: 0 0 12px;
  overflow: hidden;
`;

export const Time = styled.h6`
  font-size: 10px;
  line-height: 135%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
  color: rgba(24, 24, 24, 0.6);
  margin-left: auto;
`;

export const ButtonsBlock = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  > button {
    > svg {
      width: 10px;
      height: 10px;
      path {
        stroke: #fff;
      }
    }
    &:first-child {
      margin-right: 12px;
    }
  }
`;

export const Background = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ bg = "rgba(0, 0, 0, 0.15)" }) => bg};
  backdrop-filter: blur(5px);
  display: flex;
  z-index: 1000;
`;

export const WrapperModal = styled.div`
  width: fit-content;
  min-width: 400px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background: ${({ bg = "#ffffff" }) => bg};
  border: 1px solid ${({ borderColor = "#f9f9f9" }) => borderColor};
  box-sizing: border-box;
  box-shadow: 0px 10px 40px rgba(89, 120, 150, 0.06);
  border-radius: 4px;
  margin: auto;
`;

export const Header = styled.div`
  height: 52px;
  width: 100%;
  padding: 0 25px;
  background: #ffffff;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  box-shadow: 0px 10px 40px rgba(89, 120, 150, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

export const HeadingModal = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 135%;
  margin: 0;
  color: #181818;
  text-transform: none;
`;

export const Content = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 12px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #181818;
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 20px;
  font-size: 12px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #181818;
  margin-bottom: 20px;
  resize: none;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
