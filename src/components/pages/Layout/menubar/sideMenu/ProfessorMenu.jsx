import React from 'react';

const ProfessorMenu = () => {
    const [mailModal, setMailModal] = useState(false);

    return (
        <div>
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <MailMenu/>
            </div> }
            {<div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <ProfessorLectureMenu/>
            </div>}
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <ClassNoticeMenu/>
            </div>
            }
        </div>
    );
};

export default ProfessorMenu;
