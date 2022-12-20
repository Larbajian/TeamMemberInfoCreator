const CommonTeamInfo = require('./CommonTeamInfo');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const { describe } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');


describe('CommonTeamInfo class', () => {
    it ('creates an array of user input', () => {
        const newArray = new CommonTeamInfo ('joe', 007, 'email@email');

        expect(CommonTeamInfo.name).toEqual(
            expect.arrayContaining([expect.objectContaining({name:'joe', id: 007, email: 'email@email'})])
        );
    })
})

