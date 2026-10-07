import { Password } from './password.helper';

describe('Password', () => {
    const password = 'myPassword123';

    beforeEach(async () => {
        // Setup code before each test case
    });

    afterEach(async () => {
        // Cleanup code after each test case
    });

    it('should hash a password', async () => {
        const hashedPassword = await Password.Hash(password);

        expect(hashedPassword).toBeDefined();
        expect(hashedPassword).not.toEqual(password);
    });

    it('should compare a password with a hashed password', async () => {
        const hashedPassword = await Password.Hash(password);
        const isMatch = await Password.Compare(password, hashedPassword);

        expect(isMatch).toBe(true);
    });
});
