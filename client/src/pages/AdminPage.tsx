import { useQuery } from "@tanstack/react-query";
import { Container } from "@/components/ui/container";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ContactMessage } from "@shared/schema";
import { useState } from "react";

const AdminPage = () => {
  const [apiSecret, setApiSecret] = useState<string | null>(localStorage.getItem("adminApiSecret"));
  const [secretInput, setSecretInput] = useState("");
  
  const { data, isLoading, error } = useQuery<{ success: boolean; data: ContactMessage[] }>({
    queryKey: ["/api/contact", apiSecret],
    queryFn: async () => {
      if (!apiSecret) return { success: false, data: [] };
      
      const response = await fetch("/api/contact");
      if (!response.ok) {
        throw new Error("Failed to fetch contact messages");
      }
      return response.json();
    },
    enabled: !!apiSecret,
  });

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("adminApiSecret", secretInput);
    setApiSecret(secretInput);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (!apiSecret) {
    return (
      <section className="py-16">
        <Container>
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Admin Access</h1>
            <form onSubmit={handleSecretSubmit} className="space-y-4">
              <div>
                <label htmlFor="api-secret" className="block mb-2 text-sm font-medium">
                  Enter Admin Secret
                </label>
                <input
                  id="api-secret"
                  type="password"
                  className="w-full p-2 border rounded-md"
                  value={secretInput}
                  onChange={(e) => setSecretInput(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Access Admin Panel
              </button>
            </form>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <button
              onClick={() => {
                localStorage.removeItem("adminApiSecret");
                setApiSecret(null);
              }}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-8">Loading messages...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">
              Error loading messages. Please try again.
            </div>
          ) : !data?.data?.length ? (
            <div className="text-center py-8">No messages found.</div>
          ) : (
            <Table>
              <TableCaption>A list of contact form submissions</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Newsletter</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.data.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell>{message.id}</TableCell>
                    <TableCell className="font-medium">{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>
                      <div className="max-w-md truncate">
                        {message.message}
                      </div>
                    </TableCell>
                    <TableCell>{message.newsletter ? "Yes" : "No"}</TableCell>
                    <TableCell>{formatDate(message.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AdminPage;