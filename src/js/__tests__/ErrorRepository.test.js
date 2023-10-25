import ErrorRepository from '../ErrorRepository';

let errorRepository;

beforeEach(() => {
    errorRepository = new ErrorRepository();
});

test('Returns known error code description', () => {
    expect(errorRepository.translate(200)).toBe('OK');
});

test('Returns "Unknown error" for an unknown error code', () => {
    expect(errorRepository.translate(500)).toBe('Unknown error');
});
