import Codeblock from "./Codeblock";

const FetchExample = ({ head, link, id, mb, multiple }: 
	{head: string, link: string, id: string, mb: string, multiple?: boolean}) => {
	return (
		<div id={id} className={`${mb}`}>
			<h3 className='text-xl md:text-2xl font-bold mb-4 text-wavy'>{ head }</h3>
			<Codeblock>
				<div>
					<span className="text-mako">fetch</span>
					<span className="text-gold">{`("${link}")`}</span>
				</div>

				<div className="ml-4">
					<span className="text-mako">.then</span><span className="text-gold">(</span>
					<span>
						response {'=>'} response.<span className="text-mako">json</span>
						<span className="text-gold">()</span>
					</span>
					<span className="text-gold">)</span>
				</div>

				<div className="ml-4">
					<span className="text-mako">.then</span>
					<span className="text-gold">(</span>
					
					<span>
						quote {'=>'} <span className="text-cloud-kh">console.</span>
					</span>
					
					<span className="text-mako">log</span>
					<span className="text-gold">(</span>
					<span>quote</span>
					<span className="text-gold">)</span>
					
					<span className="text-gold">)</span>
				</div>
			</Codeblock>
			
			<p className='py-5 flex items-center'>
				<span className='mr-2'>➡️</span>
				<span className="italic text-base">Output</span>
				<span className='ml-2'>➡️</span>
			</p>
			
			<Codeblock>
				<div>
					<p>
						{multiple 
							? <>
									<span>{'[\n'}</span>
									<span className="inline-block ml-4">{"{"}</span>
								</>
							: '{'
						}
					</p>
					
					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">nameID:</span><span className="text-gold">{" ...,"}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">meaning:</span><span className="text-gold">{` "...",`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">category:</span><span className="text-gold">{` "...",`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">name:</span><span className="text-gold">{` "..."`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">gender:</span><span className="text-gold">{` "...",`}</span>
					</p>
					
					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">isFeatured:</span><span className="text-gold">{` ...,`}</span>
					</p>
					{multiple 
						? <p>
								<span className="inline-block ml-4">
									{"},\n"}
									{"{...}, * 4\n"}
								</span>
								{"\n]"}
							</p>
						: <p>{"}"}</p>
					}
				</div>
				
			</Codeblock>
		</div>
	);
};
export default FetchExample;