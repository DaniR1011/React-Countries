const Image = ({source, alternative, size}) => {
    return (
        <div style={{width: size}} className="image-container">
            <img src={source} alt={alternative} />
        </div>
    );
};

export default Image