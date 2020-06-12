import styled from 'styled-components';

export const HighlightColor = "#e6c200";
export const TintColor = "#fff5bf";

export const Header = styled.h1({
    textAlign: "center",
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(3vw, 18px)",
    borderBottom: "1px white solid"
})

export const SubHeader = styled.h2({
    textAlign: "center",
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(2vw, 16px)",
})


export const Descriptor = styled.h3({
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(1.1vw, 14px)",
    textAlign: "center"
})

export const PageText = styled.p({
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(1vw, 12px)",
    textAlign: "center",
})

export const Emph = styled.b({
    fontWeight: "normal",
    color : HighlightColor,
})

export const Container = styled.div({
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    borderWidth: "2px",
    borderBottom: "none",
    borderTop: "none",
    borderRadius: 8,
    paddingLeft: "5px",
    paddingRight: "5px",
})

