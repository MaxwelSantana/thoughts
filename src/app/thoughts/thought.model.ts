export class Thought
{
    name: string;

    /**
     * Constructor
     *
     * @param thought
     */
    constructor(thought)
    {
        {
            this.name = thought.name || '';
        }
    }
}
