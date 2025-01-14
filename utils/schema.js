// import { serial, text, varchar } from "drizzle-orm/pg-core";
// import { eq } from 'drizzle-orm';
// import { pgTable } from "drizzle-orm/pg-core";

// export const MockInterview = pgTable('mockInterview', {
//     id: serial('id').primaryKey(),
//     jsonMockResp: text('jsonMockResp').notNull(),
//     jobPosition: varchar('jobPosition').notNull(),
//     jobDesc: varchar('jobDesc').notNull(),
//     jobExperience: varchar('jobExperience').notNull(),
//     createdBy: varchar('createdBy').notNull(),
//     createdAt: varchar('createdAt'),
//     mockId: varchar('mockId').notNull()
// });

// export const Question = pgTable('Question', {
//     id: serial('id').primaryKey(),
//     MockQuestionJsonResp: text('MockQuestionJsonResp').notNull(),
//     jobPosition: varchar('jobPosition').notNull(),
//     jobDesc: varchar('jobDesc').notNull(),
//     jobExperience: varchar('jobExperience').notNull(),
//     typeQuestion: varchar('typeQuestion').notNull(),
//     company: varchar('company').notNull(),
//     createdBy: varchar('createdBy').notNull(),
//     createdAt: varchar('createdAt'),
//     mockId: varchar('mockIdRef').notNull()
// });

// // export const UserAnswer = pgTable('userAnswer',{
// //     id: serial('id').primaryKey(),
// //     mockId: varchar('mockId').notNull(),
// //     question: varchar('question').notNull(),
// //     correctAns: text('correctAns'),
// //     userAns: text('userAns'),
// //     feedback: text('feedback'),
// //     rating: varchar('rating'),
// //     userEmail: varchar('userEmail'),
// //     createdAt: varchar('createdAt')
// // })

// export const UserAnswer = pgTable('userAnswer', {
//     id: serial('id').primaryKey(),
//     mockId: varchar('mockId').notNull(),
//     question: varchar('question').notNull(),
//     correctAns: text('correctAns'),
//     userAns: text('userAns'),
//     feedback: text('feedback'),
//     rating: varchar('rating'),
//     userEmail: varchar('userEmail'),
//     createdAt: varchar('createdAt')
// });



// export const Newsletter = pgTable('newsletter',{
//     id: serial('id').primaryKey(),
//     newName: varchar('newName'),
//     newEmail: varchar('newEmail'),
//     newMessage: text('newMessage'),
//     createdAt: varchar('createdAt')
// })



import { serial, text, varchar, foreignKey } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull()
});

export const Question = pgTable('Question', {
    id: serial('id').primaryKey(),
    MockQuestionJsonResp: text('MockQuestionJsonResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    typeQuestion: varchar('typeQuestion').notNull(),
    company: varchar('company').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockIdRef').notNull(),
}, (table) => {
    return {
        mockIdRefFk: foreignKey({
            columns: [table.mockId],
            references: [MockInterview.mockId],
        }),
    };
});

export const UserAnswer = pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockId: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createdAt'),
}, (table) => {
    return {
        mockIdFk: foreignKey({
            columns: [table.mockId],
            references: [MockInterview.mockId],
        }),
    };
});

export const Newsletter = pgTable('newsletter', {
    id: serial('id').primaryKey(),
    newName: varchar('newName'),
    newEmail: varchar('newEmail'),
    newMessage: text('newMessage'),
    createdAt: varchar('createdAt')
});
