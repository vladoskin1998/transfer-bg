import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const FAQ = () => {

    const { t } = useTranslation()
    const navigation = useNavigate()

    const faqList = [
        { question: t("faq.question.1"), answer: t("faq.answer.1") },
        { question: t("faq.question.2"), answer: t("faq.answer.2") },
        { question: t("faq.question.3"), answer: t("faq.answer.3") },
        { question: t("faq.question.4"), answer: t("faq.answer.4") },
        { question: t("faq.question.5"), answer: t("faq.answer.5") },
    ]

    return (
        <Box className="faq">
            <Box className='main__advantage-title'>
                {t("faq.title")}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                {
                    faqList.map(it => <Accordion className="faq__accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Box className="faq__accordion-question">{t(it.question)}</Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className="faq__accordion-answer">{t(it.answer)}</Box>
                        </AccordionDetails>
                    </Accordion>)
                }
            </Box>
            <Button className='main__navbar-button' variant="contained" onClick={() => navigation('/')}>
                {t("faq.buttonexit")}
            </Button>
        </Box>
    );
}

export default FAQ