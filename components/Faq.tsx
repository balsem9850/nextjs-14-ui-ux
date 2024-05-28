"use client";
import * as Accordion from '@radix-ui/react-accordion';
import plus from '../public/assets/plus.png';
import Image from 'next/image';

const items = [
    {
        question: 'Ut enim ad mercim veniam, quis nostrum exercitation ullam ?',
        answer: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Ut enim ad mercim veniam, quis nostrum exercitation ullam ?',
        answer: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Ut enim ad mercim veniam, quis nostrum exercitation ullam ? ',
        answer: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Ut enim ad mercim veniam, quis nostrum exercitation ullam ?',
        answer: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
];

export function Faq() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row gap-x-6">
                <div className="w-full sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="text-[#EB2891] text-[14px] font-medium">Frequently Asked Questions</h3>
                    <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Let's clarify some of your questions</h1>
                    <p className="text-[#36485C] pb-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>

                <div className="w-full sm:w-1/2">
                    <Accordion.Root type="single" defaultValue="item-1" collapsible className="flex flex-col gap-y-4">
                        {items.map((item, index) => (
                            <div key={index}>
                                <Accordion.Item value={`item-${index + 1}`} className="bg-[#f0f0f0] p-[16px] rounded-[8px]">
                                    <Accordion.Header>
                                        <Accordion.Trigger className="w-full text-left flex justify-between items-center">
                                            <p className='text-left font-medium text-[#172026] lg:text-[18px] '>{item.question}</p>
                                            <span>
                                                <Image src={plus} alt='plus'  className='h-6 w-6 lg:w-4 lg:h-4' />
                                            </span>
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="mt-2">
                                        <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </div>
                        ))}
                    </Accordion.Root>
                </div>
            </div>
        </div>
    );
}
