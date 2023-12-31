'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

export default Providers;
