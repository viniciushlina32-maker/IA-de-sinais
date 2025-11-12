"use client";

import { useState, useEffect } from "react";
import { Brain, Upload, TrendingUp, Clock, Mail, DollarSign, Activity, ChevronDown, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AnalysisResult {
  trend: string;
  entryLevels: string;
  timing: string;
  analysis: string;
  verdict: string;
  probability: number;
  timestamp: string;
  asset: string;
}

interface HistoryItem {
  date: string;
  asset: string;
  verdict: string;
  probability: number;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [asset, setAsset] = useState("");
  const [expiration, setExpiration] = useState("");
  const [marketType, setMarketType] = useState<"normal" | "otc">("normal");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedHistory = localStorage.getItem("binarySquadHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError("");
    }
  };

  const validateForm = () => {
    if (!email) {
      setError("Por favor, insira seu e-mail.");
      return false;
    }
    if (!email.includes("@")) {
      setError("Por favor, insira um e-mail válido.");
      return false;
    }
    if (!asset) {
      setError("Por favor, insira o ativo (par de moedas).");
      return false;
    }
    if (!expiration) {
      setError("Por favor, selecione o tempo de expiração.");
      return false;
    }
    if (!imageFile) {
      setError("Por favor, envie uma imagem do gráfico antes de iniciar a análise.");
      return false;
    }
    return true;
  };

  const analyzeChart = async () => {
    if (!validateForm()) return;

    setError("");
    setIsAnalyzing(true);
    setProgress(0);

    // Simular progresso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 300);

    try {
      const formData = new FormData();
      formData.append("image", imageFile!);
      formData.append("email", email);
      formData.append("asset", asset);
      formData.append("expiration", expiration);
      formData.append("marketType", marketType);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // Verificar se a resposta é JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta inválida do servidor. Por favor, tente novamente.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao processar análise");
      }

      clearInterval(progressInterval);
      setProgress(100);

      setTimeout(() => {
        setAnalysisResult(result);
        setIsAnalyzing(false);

        // Salvar no histórico
        const newHistoryItem: HistoryItem = {
          date: new Date().toLocaleString("pt-BR"),
          asset: asset,
          verdict: result.verdict,
          probability: result.probability,
        };

        const updatedHistory = [newHistoryItem, ...history].slice(0, 5);
        setHistory(updatedHistory);
        localStorage.setItem("binarySquadHistory", JSON.stringify(updatedHistory));
      }, 500);
    } catch (err: any) {
      clearInterval(progressInterval);
      setError(err.message || "Erro ao processar a análise. Tente novamente.");
      setIsAnalyzing(false);
      setProgress(0);
    }
  };

  const resetForm = () => {
    setEmail("");
    setAsset("");
    setExpiration("");
    setMarketType("normal");
    setImageFile(null);
    setImagePreview("");
    setAnalysisResult(null);
    setError("");
    setProgress(0);
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0096ff10_1px,transparent_1px),linear-gradient(to_bottom,#0096ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Brain className="w-12 h-12 text-cyan-400" />
              <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-50" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              IA de Análise Profissional
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-light">Binary Squad — Inteligência Artificial de Mercado</p>
        </div>

        {/* Botão Corretora */}
        <div className="mb-8">
          <a
            href="https://app.binarysquad.com/auth/register?affiliateId=01K0365G9YQNP21DA4DQMGC6HH"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-lg shadow-lg shadow-green-500/50 transition-all duration-300 hover:scale-[1.02]">
              <TrendingUp className="w-5 h-5 mr-2" />
              📈 Criar Conta na Corretora Oficial
            </Button>
          </a>
        </div>

        {!analysisResult ? (
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-800 p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-300 flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>

              {/* Ativo */}
              <div>
                <Label htmlFor="asset" className="text-gray-300 flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  Ativo (Par de Moedas) *
                </Label>
                <Input
                  id="asset"
                  type="text"
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  placeholder="Ex: EUR/USD, BTC/USD, GBP/JPY"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>

              {/* Expiração e Tipo de Mercado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiration" className="text-gray-300 flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    Tempo de Expiração *
                  </Label>
                  <Select value={expiration} onValueChange={setExpiration}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20">
                      <SelectValue placeholder="Selecione o tempo" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="1" className="text-white hover:bg-gray-700">1 minuto</SelectItem>
                      <SelectItem value="2" className="text-white hover:bg-gray-700">2 minutos</SelectItem>
                      <SelectItem value="5" className="text-white hover:bg-gray-700">5 minutos</SelectItem>
                      <SelectItem value="10" className="text-white hover:bg-gray-700">10 minutos</SelectItem>
                      <SelectItem value="15" className="text-white hover:bg-gray-700">15 minutos</SelectItem>
                      <SelectItem value="30" className="text-white hover:bg-gray-700">30 minutos</SelectItem>
                      <SelectItem value="60" className="text-white hover:bg-gray-700">60 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-300 flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    Tipo de Mercado *
                  </Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={() => setMarketType("normal")}
                      className={`flex-1 ${
                        marketType === "normal"
                          ? "bg-cyan-600 hover:bg-cyan-700"
                          : "bg-gray-800/50 hover:bg-gray-700 text-gray-300"
                      }`}
                    >
                      Mercado Normal
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setMarketType("otc")}
                      className={`flex-1 ${
                        marketType === "otc"
                          ? "bg-cyan-600 hover:bg-cyan-700"
                          : "bg-gray-800/50 hover:bg-gray-700 text-gray-300"
                      }`}
                    >
                      OTC
                    </Button>
                  </div>
                </div>
              </div>

              {/* Upload de Imagem */}
              <div>
                <Label className="text-gray-300 flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-cyan-400" />
                  Imagem do Gráfico *
                </Label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer bg-gray-800/30">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {imagePreview ? (
                      <div className="space-y-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-64 mx-auto rounded-lg border border-gray-700"
                        />
                        <p className="text-sm text-gray-400">Clique para alterar a imagem</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-12 h-12 mx-auto text-gray-600" />
                        <p className="text-gray-400">Clique para fazer upload do gráfico</p>
                        <p className="text-xs text-gray-500">PNG, JPG ou JPEG</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Erro */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Botão Analisar */}
              <Button
                onClick={analyzeChart}
                disabled={isAnalyzing}
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="w-5 h-5 mr-2 animate-pulse" />
                    Processando Análise...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5 mr-2" />
                    Iniciar Análise Profissional
                  </>
                )}
              </Button>

              {/* Barra de Progresso */}
              {isAnalyzing && (
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-center text-sm text-gray-400">
                    Analisando padrões do gráfico... {progress}%
                  </p>
                </div>
              )}
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Resultado da Análise */}
            <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-cyan-500/30 p-8 shadow-2xl shadow-cyan-500/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">Análise Completa</h2>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Ativo</p>
                    <p className="text-lg font-semibold text-white">{analysisResult.asset}</p>
                  </div>
                </div>

                {/* Tendência */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">TENDÊNCIA PREDOMINANTE</h3>
                  <p className="text-lg text-white">{analysisResult.trend}</p>
                </div>

                {/* Níveis de Entrada */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">NÍVEIS DE ENTRADA</h3>
                  <p className="text-lg text-white">{analysisResult.entryLevels}</p>
                </div>

                {/* Momento Ideal */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">MOMENTO IDEAL</h3>
                  <p className="text-lg text-white">{analysisResult.timing}</p>
                </div>

                {/* Análise Detalhada */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">ANÁLISE TÉCNICA DETALHADA</h3>
                  <p className="text-white leading-relaxed whitespace-pre-line">{analysisResult.analysis}</p>
                </div>

                {/* Veredito Final */}
                <div className={`rounded-lg p-6 border-2 ${
                  analysisResult.verdict.includes("CALL")
                    ? "bg-green-500/10 border-green-500"
                    : "bg-red-500/10 border-red-500"
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">VEREDITO FINAL</h3>
                      <p className={`text-2xl font-bold ${
                        analysisResult.verdict.includes("CALL") ? "text-green-400" : "text-red-400"
                      }`}>
                        {analysisResult.verdict}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400 mb-1">Probabilidade</p>
                      <p className="text-3xl font-bold text-cyan-400">{analysisResult.probability}%</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={resetForm}
                  className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300"
                >
                  Nova Análise
                </Button>
              </div>
            </Card>

            {/* Botão Ver Histórico */}
            {history.length > 0 && (
              <div>
                <Button
                  onClick={() => setShowHistory(!showHistory)}
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <History className="w-4 h-4 mr-2" />
                  {showHistory ? "Ocultar Histórico" : "Ver Histórico"}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showHistory ? "rotate-180" : ""}`} />
                </Button>

                {showHistory && (
                  <Card className="mt-4 bg-gray-900/50 backdrop-blur-xl border-gray-800 p-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">Últimas 5 Análises</h3>
                    <div className="space-y-3">
                      {history.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                        >
                          <div>
                            <p className="text-white font-semibold">{item.asset}</p>
                            <p className="text-xs text-gray-400">{item.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${
                              item.verdict.includes("CALL") ? "text-green-400" : "text-red-400"
                            }`}>
                              {item.verdict}
                            </p>
                            <p className="text-xs text-cyan-400">{item.probability}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        )}

        {/* Footer com Data/Hora */}
        <div className="mt-8 text-center text-sm text-gray-500 font-mono">
          {currentTime}
        </div>
      </div>
    </div>
  );
}
