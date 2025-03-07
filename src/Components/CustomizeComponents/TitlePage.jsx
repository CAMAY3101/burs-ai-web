import React from "react";
import PropTypes from "prop-types";

const TitlePage = ({ title }) => {
  return (
    <h1 className="font-rubik font-bold text-xl text-purple-heart-950">
      {title}
    </h1>
  );
};

TitlePage.propTypes = {
  title: PropTypes.string.isRequired, // `title` debe ser un string y es obligatorio
};

export default TitlePage;
