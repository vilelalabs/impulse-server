import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies (saber dentro do teste se alguma função foi chamada)

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)


describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async() => {
        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'I have a problem',
            screenshot: 'data:image/png;base64,screenshot'
        })).resolves.not.toThrow();


        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should be not able to submit a feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'I have a problem',
            screenshot: 'data:image/png;base64,screenshot'
        })).rejects.toThrow();
    });

    it('should be not able to submit a feedback without comment', async () => {

        await expect(submitFeedback.execute({
            type: 'bug',
            comment: '',
            screenshot: 'data:image/png;base64,screenshot'
        })).rejects.toThrow();
    });

    it('should be not able to submit a feedback without invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'test comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});
