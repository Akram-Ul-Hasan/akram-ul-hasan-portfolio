import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div className='text-center'>
            <span className='wrapTitle' data-text={`${props?.title}...`}>{props?.title}...</span>
        </div>
    );
};

export default SectionTitle;